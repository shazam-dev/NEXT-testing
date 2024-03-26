'use client'
import React, { useState, useEffect } from "react";


export default async function Page() {

    // const [position, setPosition] = useState('0');
  
    // useEffect(() => {
    //     const successCallback = (position:any) => {
    //         setPosition(`${position.coords.latitude}-_-${position.coords.longitude}`)
    //         console.log(position);
    //       };
          
    //       const errorCallback = (error:any) => {
    //         console.log(error);
    //       };
          
    //       navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    // }, [])

let promise = new Promise(function(resolve) {
	setTimeout(function() {
		let result = [1, 2, 3, 4, 5];
		resolve(result); // передаем результат
	}, 300000);
});
await promise

      return <p>{123}</p>


}