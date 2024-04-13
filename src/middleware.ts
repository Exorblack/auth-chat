import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const islogin = path === "/" || path === "/auth/login" || path === "/auth/register"

    const token = req.cookies.get("accessToken")?.value || ''
    const csrfToken = req.cookies.get("csrfToken")?.value || ''

    if (islogin && token && csrfToken ) {
        return NextResponse.redirect(new URL('/dashboard',req.nextUrl))
    }

    if (!islogin && !token && !csrfToken) {
        return NextResponse.redirect(new URL('/',req.nextUrl))
    }

}
 
// See "Matching Paths"
export const config = {
  matcher:[
    '/',
    '/dashboard',
    '/auth/login',
    '/auth/register',
  ]
}