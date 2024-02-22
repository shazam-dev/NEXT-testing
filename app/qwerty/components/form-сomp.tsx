'use client'


import Link from 'next/link';


export default function FormComp(props:any) {


  return (
    <>
        <h1> {props.createObject.main}</h1>
        <input
        type='text'
         onChange={(e: any) =>
            props.changeCreateObject({ main: e.target.value })
        }
        />
    </>

  );
}
