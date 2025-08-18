import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.redirect('https://www.generative-engine.org/feed.xml', 301)
}