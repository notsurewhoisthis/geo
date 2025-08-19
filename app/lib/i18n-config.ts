// International SEO Configuration
export interface Language {
  code: string
  name: string
  nativeName: string
  region?: string
  url: string
  enabled: boolean
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    region: 'US',
    url: 'https://www.generative-engine.org',
    enabled: true
  },
  {
    code: 'en-GB',
    name: 'English (UK)',
    nativeName: 'English (UK)',
    region: 'GB',
    url: 'https://uk.generative-engine.org',
    enabled: false // Enable when UK version is ready
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    region: 'ES',
    url: 'https://es.generative-engine.org',
    enabled: false // Enable when Spanish version is ready
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    region: 'FR',
    url: 'https://fr.generative-engine.org',
    enabled: false // Enable when French version is ready
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    region: 'DE',
    url: 'https://de.generative-engine.org',
    enabled: false // Enable when German version is ready
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    region: 'PT',
    url: 'https://pt.generative-engine.org',
    enabled: false // Enable when Portuguese version is ready
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    region: 'IT',
    url: 'https://it.generative-engine.org',
    enabled: false // Enable when Italian version is ready
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    region: 'JP',
    url: 'https://ja.generative-engine.org',
    enabled: false // Enable when Japanese version is ready
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    region: 'CN',
    url: 'https://zh.generative-engine.org',
    enabled: false // Enable when Chinese version is ready
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    region: 'KR',
    url: 'https://ko.generative-engine.org',
    enabled: false // Enable when Korean version is ready
  }
]

// Get enabled languages for hreflang tags
export function getEnabledLanguages(): Language[] {
  return languages.filter(lang => lang.enabled)
}

// Generate hreflang tags for a specific page
export function generateHreflangTags(pathname: string): Array<{ lang: string; url: string }> {
  const enabledLanguages = getEnabledLanguages()
  const tags: Array<{ lang: string; url: string }> = []
  
  // Add tags for each enabled language
  for (const lang of enabledLanguages) {
    tags.push({
      lang: lang.code,
      url: `${lang.url}${pathname}`
    })
  }
  
  // Add x-default tag (fallback) - use www version
  tags.push({
    lang: 'x-default',
    url: `https://www.generative-engine.org${pathname}`
  })
  
  return tags
}

// Locale-specific content variations
export const localeContent = {
  'en': {
    title: 'Generative Engine Optimization',
    description: 'Master GEO for AI-powered search engines',
    cta: 'Get Started'
  },
  'es': {
    title: 'Optimización de Motores Generativos',
    description: 'Domina GEO para motores de búsqueda con IA',
    cta: 'Comenzar'
  },
  'fr': {
    title: 'Optimisation des Moteurs Génératifs',
    description: 'Maîtrisez le GEO pour les moteurs de recherche IA',
    cta: 'Commencer'
  },
  'de': {
    title: 'Generative Engine-Optimierung',
    description: 'Meistern Sie GEO für KI-gestützte Suchmaschinen',
    cta: 'Loslegen'
  },
  'pt': {
    title: 'Otimização de Mecanismos Generativos',
    description: 'Domine GEO para motores de busca com IA',
    cta: 'Começar'
  },
  'it': {
    title: 'Ottimizzazione dei Motori Generativi',
    description: 'Padroneggia il GEO per i motori di ricerca IA',
    cta: 'Inizia'
  },
  'ja': {
    title: '生成エンジン最適化',
    description: 'AI検索エンジンのためのGEOをマスター',
    cta: '始める'
  },
  'zh': {
    title: '生成引擎优化',
    description: '掌握AI搜索引擎的GEO',
    cta: '开始'
  },
  'ko': {
    title: '생성 엔진 최적화',
    description: 'AI 검색 엔진을 위한 GEO 마스터',
    cta: '시작하기'
  }
}

// Get locale from URL or browser
export function detectLocale(url?: string): string {
  if (url) {
    // Check subdomain
    const urlObj = new URL(url)
    const subdomain = urlObj.hostname.split('.')[0]
    const lang = languages.find(l => l.url.includes(subdomain))
    if (lang) return lang.code
  }
  
  // Default to English
  return 'en'
}

// Currency and regional formatting
export const regionalFormats = {
  'en-US': {
    currency: 'USD',
    currencySymbol: '$',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: '1,234.56'
  },
  'en-GB': {
    currency: 'GBP',
    currencySymbol: '£',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56'
  },
  'es': {
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56'
  },
  'fr': {
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1 234,56'
  },
  'de': {
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1.234,56'
  },
  'ja': {
    currency: 'JPY',
    currencySymbol: '¥',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234'
  },
  'zh': {
    currency: 'CNY',
    currencySymbol: '¥',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234.56'
  },
  'ko': {
    currency: 'KRW',
    currencySymbol: '₩',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234'
  }
}

// SEO meta tags for different languages
export function getLocalizedMeta(locale: string) {
  const content = localeContent[locale as keyof typeof localeContent] || localeContent['en']
  
  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      locale: locale.replace('-', '_'), // Convert en-US to en_US for OG tags
    }
  }
}