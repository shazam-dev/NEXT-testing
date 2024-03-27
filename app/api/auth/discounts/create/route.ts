import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import prisma from '@/lib/prisma'
const { fileUploadCustom, fileDelete } = require("../S3/s3Upload");

export async function GET(){
    const users = await prisma.users.findMany()


    return NextResponse.json({users})
}


export async function POST(req:any,res:any){

    //   try {
        const {address, latitude, longitude, title, description, cost, sale, cat, image} = await req.json()
console.log(address)



        let arrayPath = ['discounts/', 'charity/', 'events/', 'avito/'];

            const imageUpload = await fileUploadCustom(
                image[0].originFileObj,
                "new-davse/"
            );
            

        const cdQ1 = await prisma.users.create({
            data
        })



        return NextResponse.json(cdQ1)

}

