import { NextRequest, NextResponse } from "next/server";
import {Getdata} from "@/tokens/getdatafromtoken";
import { db } from "@/lib/database/db";
import { Users } from "@/lib/database/schema";
import { eq } from "drizzle-orm";


export async function GET(req:NextRequest) {
    try {
        const getusername = await Getdata(req)
        const username = await db.query.Users.findFirst({
            where: (table) => eq(table.username, getusername)
        });

        return NextResponse.json({
            message:"found",
            data:username
        })


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}