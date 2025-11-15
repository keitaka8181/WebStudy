import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // This is a placeholder for actual authentication logic.
  // In a real application, you would check for a session cookie, JWT, etc.
  const isAuthenticated = true; // Temporarily set to true for testing purposes

  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/projects')) {
    // Redirect to login page if not authenticated and trying to access /projects
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/projects/:path*', '/login', '/register'], // Apply middleware to /projects and auth pages
}
