'use server';
import Link from 'next/link';
import React, { useState } from 'react';
import FormComp from './components/form-сomp';

export default async function Page() {
  // const [createObject, setCreateObject] = useState<any>({main: 1});
  let createObject = { main: 1 };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>Привет подо мной форма</h1>
      <FormComp createObject={createObject} />
    </main>
  );
}
