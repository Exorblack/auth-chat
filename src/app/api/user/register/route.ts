import { db } from "@/lib/database/db";
import { Users } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt';
import * as z from "zod";


const reguserschema = z.object({

    first_name:z.string()
    .min(2,"first name must be at least 2 characters")
    .max(45,"more than 45 characters")
    .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),
  
    last_name:z.string()
    .min(2,"last name must be at least 2 characters")
    .max(45,"more than 45 characters")
    .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),
    username:z.string()
      .min(4,"last name must be at least 4 characters")
      .max(45,"more than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),
  
    email:z.string().email("enter valid email"),

    password:z.string().min(8,"at least 8 ").max(45,"more than 45 char"),

  })


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {email,username,password,first_name,last_name} = reguserschema.parse(body)

        //check if email exist
        const exemail = await db.query.Users.findFirst({
            where:(table)=>eq(table.email,email),
        })
        if (exemail) {
            return NextResponse.json({user:null,message:"email already exist"},{status: 409})
        }
        //check if username exist
        const exusername = await db.query.Users.findFirst({
            where:(table)=>eq(table.username,username),
        })
        if (exusername) {
            return NextResponse.json({user:null,message:"username already exist"},{status: 409})
        }

        const hashedpass = await bcrypt.hash(password , 10);
        const newuser = await db.insert(Users).values({
            email,
            username,
            password:hashedpass,
            first_name,
            last_name
        })
        //const { password: newUserPassword, ...rest} = newuser

       return NextResponse.json({
        user:newuser,
        message:"created successfully",
        success: true
    },{status:201})

    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}