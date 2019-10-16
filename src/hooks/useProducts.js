


import { useState } from 'react' ; 



export default function (initData) {
    const [ state ,setState ] = useState([...initData]);
    const fillProducts = (data) => {
        setState([...state,...data])
    };
    console.log(state)
    return [state , fillProducts ]
}