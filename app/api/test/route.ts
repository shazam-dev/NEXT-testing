import { NextResponse } from "next/server";
import prisma from '@/lib/prisma'
export async function GET(){


  let data = await fetch("https://api.kopi34.ru/api/goods/fetch-xsl-file");
  data = await data.json();
  console.log(data);



    return NextResponse.json({data})
}

export async function POST(req:any,res:any){
    const data  = await req.json()
    console.log(data)

    return NextResponse.json(data)
}