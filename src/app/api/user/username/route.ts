import { NextRequest, NextResponse } from "next/server";
import {Getdata} from "@/tokens/getdatafromtoken";
import { db } from "@/lib/database/db";
import { eq } from "drizzle-orm";


export async function GET(req:NextRequest) {
    try {
        const getusername = await Getdata(req)
        const username = await db.query.Users.findFirst({
            where: (table) => eq(table.username, getusername)
        });

        return NextResponse.json({
            message:"found",
            username:username?.username
        })


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}