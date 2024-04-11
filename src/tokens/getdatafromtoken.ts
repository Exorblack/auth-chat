import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";


export function Getdata(req:NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value || "";
        const decoded:any = Jwt.verify(token, process.env.JWT_SECRET!)
        return decoded.username

    } catch (error:any) {
        throw new Error(error.message)
    }
}