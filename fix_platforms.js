const fs = require('fs');
const path = require('path');

// Load the current platforms data
const platformsPath = path.join(__dirname, 'public', 'data', 'platforms.json');
const platforms = JSON.parse(fs.readFileSync(platformsPath, 'utf8'));

// Define the missing platforms that need schema updates
const platformsToUpdate = [
  "canva-magic-studio", "gamma", "fathom", "suno", "obviously-ai", "make", 
  "descript", "notebooklm", "rytr", "sudowrite", "looka", "aws-sagemaker", 
  "h2o-ai", "ibm-watson", "salesforce-einstein", "pytorch", "tensorflow", 
  "uipath-ai", "moveworks", "deepl-write", "frase", "scribe", "tome", 
  "udio", "murf", "adcreative-ai", "julius-ai", "reclaim", "clockwise", 
  "teal", "kickresume", "nvidia-ai", "intel-ai"
];

// Update each platform with the required schema
platforms.forEach(platform => {
  if (platformsToUpdate.includes(platform.slug)) {
    // Ensure launch field exists
    if (!platform.launch) {
      platform.launch = "2023"; // Default launch year
    }

    // Fix geoOptimization structure
    if (!platform.geoOptimization || !platform.geoOptimization.citationWeight) {
      platform.geoOptimization = {
        citationWeight: 75,
        statisticsWeight: 70,
        faqWeight: 65,
        conversationalWeight: 60,
        authorityWeight: 80
      };

      // Adjust based on platform type
      if (platform.type?.includes('Research') || platform.category?.includes('Research')) {
        platform.geoOptimization.citationWeight = 90;
        platform.geoOptimization.statisticsWeight = 85;
        platform.geoOptimization.authorityWeight = 95;
      } else if (platform.type?.includes('Creative') || platform.category?.includes('Creative')) {
        platform.geoOptimization.conversationalWeight = 85;
        platform.geoOptimization.faqWeight = 80;
      } else if (platform.type?.includes('Business') || platform.category?.includes('Business')) {
        platform.geoOptimization.statisticsWeight = 90;
        platform.geoOptimization.authorityWeight = 85;
      }
    }

    // Add keyFeatures if missing
    if (!platform.keyFeatures) {
      platform.keyFeatures = [
        `${platform.type} capabilities`,
        "User-friendly interface",
        "Integration support",
        "Real-time processing",
        "Cloud-based platform",
        "Advanced analytics"
      ];
    }

    // Add optimizationStrategies if missing
    if (!platform.optimizationStrategies) {
      platform.optimizationStrategies = [
        `Optimize content for ${platform.type.toLowerCase()} use cases`,
        "Include relevant industry examples",
        "Use platform-specific terminology",
        "Create step-by-step guides",
        "Add technical documentation",
        "Include performance metrics",
        "Provide integration examples",
        "Use clear categorization"
      ];
    }

    // Add contentPreferences if missing
    if (!platform.contentPreferences) {
      platform.contentPreferences = [
        "Technical documentation",
        "How-to guides",
        "Best practices",
        "Case studies",
        "Industry insights",
        "Integration tutorials"
      ];

      // Adjust based on platform focus
      if (platform.category?.includes('Creative')) {
        platform.contentPreferences = [
          "Creative tutorials",
          "Design workflows",
          "Inspiration galleries",
          "Tips and tricks",
          "Visual examples",
          "Process guides"
        ];
      } else if (platform.category?.includes('Research')) {
        platform.contentPreferences = [
          "Research methodologies",
          "Academic papers",
          "Data analysis guides",
          "Citation examples",
          "Statistical reports",
          "Analytical frameworks"
        ];
      }
    }
  }
});

// Write the updated platforms back to the file
fs.writeFileSync(platformsPath, JSON.stringify(platforms, null, 2));
console.log(`Updated ${platformsToUpdate.length} platforms with required schema fields`);