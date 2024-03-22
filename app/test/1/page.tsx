
import React from "react";

import {deleteInvoice} from '@/lib/actions'
export default async function Page() {
    // const [position, setPosition] = useState('0');

  let promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve([1, 2, 3, 4, 5]);
    }, 3000);
  });

    await promise;


      return (
      <p>тестирование задержки</p>
      
      );


}