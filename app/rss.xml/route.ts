import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.redirect('https://generative-engine.org/feed.xml', 301)
}