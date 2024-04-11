// import { serialize } from 'cookie';
// import { NextResponse } from 'next/server';

export function generateCsrfToken(): string {
    const csrfToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return csrfToken;}

// export function setCsrfCookie(res: NextResponse, csrfToken: string): void {
//   // Cast NextResponse to a type with setHeader
//   (res as any).setHeader('Set-Cookie', serialize('csrfToken', csrfToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     path: '/',
//     maxAge: 60 * 60 * 24, // 1 day
//   }));
// }
