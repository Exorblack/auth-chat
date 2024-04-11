import { db } from "@/lib/database/db";
//import { Users } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt';
import * as z from "zod";
import jwt from 'jsonwebtoken';
import { generateCsrfToken } from '@/tokens/csrf';


const loguserschema = z.object({
    username: z.string()
        .min(4,"last name must be at least 4 characters")
        .max(45,"more than 45 characters")
        .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),
    password: z.string().min(8,"at least 8 ").max(45,"more than 45 char")
});


export async function POST(req: NextRequest) {
    try {
        
        const body = await req.json();
        const { username, password } = loguserschema.parse(body);

        const user = await db.query.Users.findFirst({
            where:(table)=>eq(table.username,username),
        });
        
        if (!username || !password) {
            return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
        }
        if (!user) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }

        // Generate csrf Token
        const csrfToken = generateCsrfToken();

        // Generate Token
        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        }

        const accessToken = jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: '1d' });

        // Set Secure Headers
        // response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        // response.headers.set('X-Content-Type-Options', 'nosniff');
        // response.headers.set('X-Frame-Options', 'DENY');
        // response.headers.set('X-XSS-Protection', '1; mode=block');

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            accessToken,
            csrfToken
        }, { status: 200 });

        // Set Secure Cookies
        response.cookies.set("accessToken", accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        response.cookies.set("csrfToken", csrfToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        return response;
              
    } catch (error:any) {
        console.error('Login error:', error);
        return NextResponse.json({message:error.message},{status:500})
    }
}
