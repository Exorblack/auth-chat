import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";


export function Getdata(req:NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value || "";
        if (!token) {
            throw new Error("Access token not found in cookies");
        }
        const decoded: any = Jwt.verify(token, process.env.JWT_SECRET!);
        if (!decoded || !decoded.username) {
            throw new Error("Username not found in decoded token");
        }
        
        return decoded.username;

    } catch (error:any) {
        throw new Error(error.message)
    }
}
export function Getdatafn(req:NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value || "";
        if (!token) {
            throw new Error("Access token not found in cookies");
        }
        const decoded: any = Jwt.verify(token, process.env.JWT_SECRET!);
        if (!decoded || !decoded.first_name) {
            throw new Error("first_name not found in decoded token");
        }
        
        return decoded.first_name;

    } catch (error:any) {
        throw new Error(error.message)
    }
}
export function Getdataln(req:NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value || "";
        if (!token) {
            throw new Error("Access token not found in cookies");
        }
        const decoded: any = Jwt.verify(token, process.env.JWT_SECRET!);
        if (!decoded || !decoded.last_name) {
            throw new Error("first_name not found in decoded token");
        }
        
        return decoded.last_name;

    } catch (error:any) {
        throw new Error(error.message)
    }
}