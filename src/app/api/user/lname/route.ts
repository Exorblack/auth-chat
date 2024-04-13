import { NextRequest, NextResponse } from "next/server";
import {Getdata, Getdataln} from "@/tokens/getdatafromtoken";
import { db } from "@/lib/database/db";
import { eq } from "drizzle-orm";


export async function GET(req:NextRequest) {
    try {
        const getusername = await Getdataln(req)
        const last_name = await db.query.Users.findFirst({
            where: (table) => eq(table.last_name, getusername)
        });

        return NextResponse.json({
            message:"found",
            last_name:last_name?.last_name
        })


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}