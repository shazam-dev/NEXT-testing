import { NextResponse } from "next/server";

import prisma from '@/lib/prisma'



export async function GET(){
    const users = await prisma.users.findMany()


    return NextResponse.json({users})
}



export async function POST(req:any,res:any){
    const data  = await req.json()

    const user = await prisma.users.create({
        data
      })
    console.log(12121212, data)
    return NextResponse.json(user)
}