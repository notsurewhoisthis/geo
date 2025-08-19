// Icon mapping for tips
const iconMap = {
    'lightbulb': '💡',
    'code': '🔧',
    'star': '⭐',
    'chat': '💬',
    'link': '🔗',
    'grid': '📱'
};

// Load GEO Tips
async function loadTips() {
    try {
        const response = await fetch('/api/geo-tips');
        const tips = await response.json();
        displayTips(tips);
        setupTabFilters(tips);
    } catch (error) {
        console.error('Error loading tips:', error);
    }
}

// Display tips in the grid
function displayTips(tips, category = 'all') {
    const container = document.getElementById('tips-container');
    const filteredTips = category === 'all' 
        ? tips 
        : tips.filter(tip => tip.category === category);
    
    container.innerHTML = filteredTips.map(tip => `
        <div class="tip-card" data-category="${tip.category}">
            <div class="tip-header">
                <div class="tip-icon">${iconMap[tip.icon] || '🚀'}</div>
                <h3 class="tip-title">${tip.title}</h3>
            </div>
            <p class="tip-description">${tip.description}</p>
            <span class="tip-category">${tip.category}</span>
        </div>
    `).join('');
}

// Setup tab filters
function setupTabFilters(tips) {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter tips
            const category = tab.dataset.category;
            displayTips(tips, category);
        });
    });
}

// Load GEO Metrics
async function loadMetrics() {
    try {
        const response = await fetch('/api/geo-metrics');
        const metrics = await response.json();
        displayMetrics(metrics);
    } catch (error) {
        console.error('Error loading metrics:', error);
    }
}

// Display metrics
function displayMetrics(metrics) {
    const container = document.getElementById('metrics-container');
    
    container.innerHTML = Object.entries(metrics).map(([key, value]) => `
        <div class="metric-card">
            <div class="metric-value">${value}%</div>
            <div class="metric-label">${key}</div>
            <div class="metric-bar">
                <div class="metric-progress" style="width: 0%;" data-target="${value}"></div>
            </div>
        </div>
    `).join('');
    
    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.metric-progress').forEach(bar => {
            const target = bar.dataset.target;
            bar.style.width = `${target}%`;
        });
    }, 100);
}

// Load Resources
async function loadResources() {
    try {
        const response = await fetch('/api/geo-resources');
        const resources = await response.json();
        displayResources(resources);
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

// Display resources
function displayResources(resources) {
    const container = document.getElementById('resources-container');
    
    container.innerHTML = resources.map(resource => `
        <div class="resource-card">
            <span class="resource-type">${resource.type}</span>
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-description">${resource.description}</p>
        </div>
    `).join('');
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.tip-card, .metric-card, .resource-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadTips();
    loadMetrics();
    loadResources();
    setupSmoothScrolling();
    
    // Setup scroll animations after content loads
    setTimeout(setupScrollAnimations, 500);
    
    // Add hover effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});