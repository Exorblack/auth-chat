import { NextRequest, NextResponse } from "next/server";
import {Getdata, Getdatafn} from "@/tokens/getdatafromtoken";
import { db } from "@/lib/database/db";
import { eq } from "drizzle-orm";


export async function GET(req:NextRequest) {
    try {
        const getusername = await Getdatafn(req)
        const first_name = await db.query.Users.findFirst({
            where: (table) => eq(table.first_name, getusername)
        });

        return NextResponse.json({
            message:"found",
            first_name:first_name?.first_name
        })


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}