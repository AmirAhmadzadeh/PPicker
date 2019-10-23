


import { useState } from 'react' ; 



export default function (initData = false) {
    const [ state ,setState ] = useState(false);
    const toggle = () => {
        setState(!state) 
    };
  
    return [state , toggle ]
}