


import { useState } from 'react' ; 



export default function (initData = null) {
    const [ state ,setState ] = useState(initData);
   
    const setValue = (val) => {
   
        setState(val) 
   
    };
  
    return [state , setValue ]
}