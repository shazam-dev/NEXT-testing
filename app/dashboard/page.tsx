// 'use client'
import React, { useState,  useRef, useEffect } from "react";
import { signOut, auth } from '@/auth';
import {logOut} from '@/lib/actions'

export default async function Page() {

console.log(await auth())
      return (
      <>
        <form action={logOut}
      >
        <button type="submit" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">

          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
</>
        );


}''