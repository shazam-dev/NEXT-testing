'use client'
import React, { useState,  useRef, useEffect } from "react";

export default function Page() {
    const [position, setPosition] = useState('0');
  
    useEffect(() => {
        const successCallback = (position:any) => {
            setPosition(`${position.coords.latitude}-_-${position.coords.longitude}`)
            console.log(position);
          };
          
          const errorCallback = (error:any) => {
            console.log(error);
          };
          
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, [])


      return <p>{position}</p>


}