import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEO Glossary - Generative Engine Optimization Terms & Definitions',
  description: 'Complete glossary of Generative Engine Optimization (GEO) terms, AI SEO concepts, and LLM optimization terminology. Essential reference for mastering GEO.',
  keywords: 'GEO glossary, AI SEO terms, generative engine optimization definitions, LLM terminology, ChatGPT optimization terms',
  openGraph: {
    title: 'GEO Glossary - Essential Terms & Definitions',
    description: 'Your complete reference for Generative Engine Optimization terminology',
    url: 'https://generative-engine.org/glossary',
    type: 'website',
  },
}

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: 'Generative Engine Optimization (GEO)',
      definition: 'The practice of optimizing content specifically for AI-powered search engines and chatbots like ChatGPT, Claude, and Perplexity. GEO focuses on semantic structure, comprehensive coverage, and authoritative citations to improve visibility in AI-generated responses.',
      relatedTerms: ['AI SEO', 'LLM Optimization'],
      category: 'Core Concepts',
    },
    {
      term: 'Large Language Model (LLM)',
      definition: 'Advanced AI systems trained on vast amounts of text data that can understand and generate human-like text. Examples include GPT-4, Claude, and LLaMA. These models power AI search engines and chatbots.',
      relatedTerms: ['GPT', 'Claude', 'Transformer'],
      category: 'AI Technology',
    },
    {
      term: 'AI Citation',
      definition: 'When an AI model references or quotes your content in its generated response. AI citations are a key metric for measuring GEO success and indicate that your content is considered authoritative by the AI.',
      relatedTerms: ['AI Visibility', 'Citation Rate'],
      category: 'Metrics',
    },
    {
      term: 'Semantic Markup',
      definition: 'HTML and structured data that explicitly defines the meaning and relationships of content elements. Essential for helping AI models understand context and extract information accurately.',
      relatedTerms: ['Schema.org', 'JSON-LD', 'Structured Data'],
      category: 'Technical SEO',
    },
    {
      term: 'Conversational Query',
      definition: 'Natural language questions typically 10-11 words long that users ask AI assistants. Unlike traditional keyword searches, these queries are phrased as complete questions or requests.',
      relatedTerms: ['Natural Language Query', 'Long-tail Keywords'],
      category: 'Search Behavior',
    },
    {
      term: 'RAG (Retrieval-Augmented Generation)',
      definition: 'A technique where AI models retrieve relevant information from external sources before generating responses. Understanding RAG is crucial for GEO as it influences how AI systems select and cite content.',
      relatedTerms: ['Vector Search', 'Embeddings'],
      category: 'AI Technology',
    },
    {
      term: 'Prompt Engineering',
      definition: 'The practice of crafting optimal inputs for AI models to generate desired outputs. In GEO context, this relates to understanding how users phrase queries to AI assistants.',
      relatedTerms: ['Query Optimization', 'User Intent'],
      category: 'Optimization',
    },
    {
      term: 'AI Visibility Score',
      definition: 'A metric measuring how frequently and prominently your content appears in AI-generated responses across different platforms. Typically measured as a percentage improvement over baseline.',
      relatedTerms: ['Citation Rate', 'GEO Metrics'],
      category: 'Metrics',
    },
    {
      term: 'Entity Recognition',
      definition: 'The AI\'s ability to identify and understand specific people, places, organizations, and concepts in text. Optimizing for entity recognition improves content comprehension by AI models.',
      relatedTerms: ['NER', 'Entity Linking', 'Knowledge Graph'],
      category: 'AI Technology',
    },
    {
      term: 'Token',
      definition: 'The basic unit of text that LLMs process, roughly equivalent to 3/4 of a word. Understanding token limits is important for optimizing content length and structure for AI consumption.',
      relatedTerms: ['Context Window', 'Token Limit'],
      category: 'AI Technology',
    },
    {
      term: 'Context Window',
      definition: 'The maximum amount of text an AI model can process at once, measured in tokens. Larger context windows allow AI to understand and reference more comprehensive content.',
      relatedTerms: ['Token Limit', 'Input Length'],
      category: 'AI Technology',
    },
    {
      term: 'Embeddings',
      definition: 'Mathematical representations of text that capture semantic meaning. AI systems use embeddings to understand content similarity and relevance for retrieval and ranking.',
      relatedTerms: ['Vector Search', 'Semantic Search'],
      category: 'AI Technology',
    },
    {
      term: 'Fine-tuning',
      definition: 'The process of further training an AI model on specific data to improve its performance for particular tasks or domains. Understanding fine-tuning helps predict how AI models might prioritize certain content.',
      relatedTerms: ['Model Training', 'Domain Adaptation'],
      category: 'AI Technology',
    },
    {
      term: 'Hallucination',
      definition: 'When AI models generate false or unsupported information. GEO strategies aim to provide clear, factual content that reduces the likelihood of AI hallucinations.',
      relatedTerms: ['AI Accuracy', 'Factual Grounding'],
      category: 'AI Challenges',
    },
    {
      term: 'Knowledge Graph',
      definition: 'A structured representation of entities and their relationships. Optimizing content to align with knowledge graph structures improves AI understanding and citation likelihood.',
      relatedTerms: ['Entity Relationships', 'Semantic Network'],
      category: 'Data Structure',
    },
    {
      term: 'Multi-modal Optimization',
      definition: 'Optimizing content across different formats (text, images, video, audio) for AI systems that can process multiple types of media simultaneously.',
      relatedTerms: ['Visual AI', 'Cross-modal Search'],
      category: 'Advanced GEO',
    },
    {
      term: 'Zero-shot Learning',
      definition: 'AI\'s ability to perform tasks without specific training examples. GEO content should be clear enough for AI to understand and use even without prior exposure.',
      relatedTerms: ['Few-shot Learning', 'Transfer Learning'],
      category: 'AI Technology',
    },
    {
      term: 'Chain of Thought',
      definition: 'A prompting technique where AI models explain their reasoning step-by-step. Content optimized for chain-of-thought processing includes clear logical progressions and explanations.',
      relatedTerms: ['Reasoning', 'Step-by-step Explanation'],
      category: 'AI Technology',
    },
    {
      term: 'Perplexity',
      definition: 'Both an AI search engine and a metric measuring how well a model predicts text. Lower perplexity indicates better understanding, which GEO aims to achieve through clear, predictable content structure.',
      relatedTerms: ['AI Search Engine', 'Model Performance'],
      category: 'Platforms & Metrics',
    },
    {
      term: 'Temperature (AI)',
      definition: 'A parameter controlling the randomness of AI responses. Understanding temperature helps predict how AI might vary its citations and content selection.',
      relatedTerms: ['Model Parameters', 'Response Variation'],
      category: 'AI Technology',
    },
    {
      term: 'Attention Mechanism',
      definition: 'The component of transformer models that determines which parts of input text are most relevant. GEO optimizes content to capture AI attention through strategic formatting and emphasis.',
      relatedTerms: ['Transformer', 'Self-attention'],
      category: 'AI Technology',
    },
    {
      term: 'RLHF (Reinforcement Learning from Human Feedback)',
      definition: 'Training method used to align AI models with human preferences. Understanding RLHF helps predict what content styles AI models will favor.',
      relatedTerms: ['Model Training', 'Human Alignment'],
      category: 'AI Technology',
    },
    {
      term: 'API-first Content',
      definition: 'Content structured to be easily consumed by AI APIs and integrations. This includes consistent formatting, clear data structures, and comprehensive metadata.',
      relatedTerms: ['Structured Content', 'Machine-readable'],
      category: 'Content Strategy',
    },
    {
      term: 'Semantic Similarity',
      definition: 'A measure of how closely related two pieces of content are in meaning. AI models use semantic similarity to find and rank relevant information for user queries.',
      relatedTerms: ['Cosine Similarity', 'Vector Distance'],
      category: 'AI Technology',
    },
    {
      term: 'GPTBot',
      definition: 'OpenAI\'s web crawler that collects data for training and improving ChatGPT. Allowing GPTBot access through robots.txt is essential for GEO.',
      relatedTerms: ['Web Crawler', 'AI Bot', 'ChatGPT'],
      category: 'Crawlers',
    },
    {
      term: 'Claude-Web',
      definition: 'Anthropic\'s web crawler for Claude AI. Similar to GPTBot, it should be allowed in robots.txt for optimal GEO performance.',
      relatedTerms: ['Web Crawler', 'AI Bot', 'Claude'],
      category: 'Crawlers',
    },
    {
      term: 'Citation Optimization',
      definition: 'The practice of structuring content with clear sources, statistics, and references that AI models prefer to cite as authoritative information.',
      relatedTerms: ['Authority Signals', 'Source Attribution'],
      category: 'Optimization',
    },
    {
      term: 'Answer Engine Optimization (AEO)',
      definition: 'Similar to GEO but focused specifically on optimizing for direct answer generation rather than broader AI visibility. Often considered a subset of GEO.',
      relatedTerms: ['GEO', 'Direct Answers'],
      category: 'Core Concepts',
    },
    {
      term: 'LLM Temperature',
      definition: 'Setting that controls creativity vs. consistency in AI responses. Lower temperature (0.1-0.3) produces more consistent citations, while higher temperature (0.7-1.0) generates more varied responses.',
      relatedTerms: ['Model Parameters', 'Response Control'],
      category: 'AI Technology',
    },
  ]

  const categories = Array.from(new Set(glossaryTerms.map(term => term.category))).sort()

  const glossarySchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'GEO Glossary',
    description: 'Comprehensive glossary of Generative Engine Optimization terms',
    url: 'https://generative-engine.org/glossary',
    hasPart: glossaryTerms.map(term => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://generative-engine.org/glossary',
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              GEO Glossary
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Your comprehensive reference for Generative Engine Optimization terminology. 
              Master the language of AI-powered search to implement effective GEO strategies.
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-gray-700 mr-4">Jump to:</span>
              {categories.map(category => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {categories.map(category => (
              <div key={category} className="mb-12" id={category.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
                  {category}
                </h2>
                <div className="space-y-6">
                  {glossaryTerms
                    .filter(term => term.category === category)
                    .sort((a, b) => a.term.localeCompare(b.term))
                    .map((term, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
                        id={term.term.toLowerCase().replace(/\s+/g, '-')}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {term.term}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {term.definition}
                        </p>
                        {term.relatedTerms && term.relatedTerms.length > 0 && (
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-sm text-gray-500 font-medium">Related:</span>
                            {term.relatedTerms.map((related, idx) => (
                              <Link
                                key={idx}
                                href={`#${related.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm hover:bg-blue-100 transition"
                              >
                                {related}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Apply Your GEO Knowledge?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Now that you understand the terminology, dive into our practical guides and start optimizing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/getting-started"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Get Started with GEO
              </Link>
              <Link 
                href="/blog"
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
              >
                Read Our Guides
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}