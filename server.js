const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// GEO API endpoints
app.get('/api/geo-tips', (req, res) => {
  const tips = [
    {
      id: 1,
      title: "Optimize for AI Context",
      description: "Structure your content to provide clear context and relevance for AI models",
      category: "content",
      icon: "lightbulb"
    },
    {
      id: 2,
      title: "Use Semantic Markup",
      description: "Implement structured data and semantic HTML to help AI understand your content",
      category: "technical",
      icon: "code"
    },
    {
      id: 3,
      title: "Focus on Authority",
      description: "Build topical authority with comprehensive, well-researched content",
      category: "strategy",
      icon: "star"
    },
    {
      id: 4,
      title: "Natural Language Optimization",
      description: "Write in conversational tone that aligns with how users query AI systems",
      category: "content",
      icon: "chat"
    },
    {
      id: 5,
      title: "Entity Recognition",
      description: "Clearly define and relate entities, concepts, and their relationships",
      category: "technical",
      icon: "link"
    },
    {
      id: 6,
      title: "Multi-Modal Content",
      description: "Include diverse content types - text, images, videos, and structured data",
      category: "strategy",
      icon: "grid"
    }
  ];
  res.json(tips);
});

app.get('/api/geo-metrics', (req, res) => {
  const metrics = {
    visibility: 87,
    relevance: 92,
    authority: 78,
    engagement: 85,
    technical: 90
  };
  res.json(metrics);
});

app.get('/api/geo-resources', (req, res) => {
  const resources = [
    {
      title: "GEO Fundamentals",
      type: "guide",
      url: "#",
      description: "Complete guide to Generative Engine Optimization"
    },
    {
      title: "AI Content Optimization",
      type: "article",
      url: "#",
      description: "Best practices for AI-friendly content"
    },
    {
      title: "Technical Implementation",
      type: "documentation",
      url: "#",
      description: "Technical requirements and implementation guide"
    }
  ];
  res.json(resources);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`GEO server running on port ${PORT}`);
});