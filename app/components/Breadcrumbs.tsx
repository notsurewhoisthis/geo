import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mb-6"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li 
              key={index}
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <svg 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              )}
              
              {isLast || !item.href ? (
                <span 
                  className="text-gray-900 font-medium"
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Pre-built breadcrumb configurations
export function BlogBreadcrumbs({ title }: { title: string }) {
  return (
    <Breadcrumbs 
      items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: title }
      ]} 
    />
  )
}

export function ToolBreadcrumbs({ toolName }: { toolName: string }) {
  return (
    <Breadcrumbs 
      items={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: toolName }
      ]} 
    />
  )
}

export function CategoryBreadcrumbs({ category, title }: { category: string; title: string }) {
  return (
    <Breadcrumbs 
      items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: category, href: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}` },
        { name: title }
      ]} 
    />
  )
}