import { NextResponse } from "next/server";

export async function GET(){


  let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  data = await data.json();
  console.log(data);


    return NextResponse.json({data})
}

export async function POST(req,res){
    const data  = await req.json()
    console.log(data)

    return NextResponse.json(data)
}