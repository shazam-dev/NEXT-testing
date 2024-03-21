
import React from "react";

import {deleteInvoice} from '@/lib/actions'
export default function Page() {
    // const [position, setPosition] = useState('0');
  



      return (
      <form action={ deleteInvoice}>
          <input type="submit" />
      </form>
      
      );


}