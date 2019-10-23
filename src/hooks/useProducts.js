


import { useState } from 'react' ; 



export default function (initData) {
    const [ state ,setState ] = useState([...initData]);
    const fillProducts = (data) => {
        setState([...state,...data])
    };

    const resetProds = (prods) => {
        setState(prods) ; 
    }
  
    return [state , fillProducts , resetProds  ]
}