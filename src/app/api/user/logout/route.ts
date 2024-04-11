import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Create a response object
        const response = NextResponse.json(
            {
            message: "Logged Out",
            success: true
            })

        response.cookies.set("accessToken", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        response.cookies.set("csrfToken", "", {
            httpOnly: true,
            expires: new Date(0)
        });

        return response;
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
