
import { useState } from 'react' ; 



export default function (initData = 1) {
    const [ state ,setState ] = useState(initData);
    const setCurrIdx = (value) => {
        setState(value)
    };
    return [state , setCurrIdx ]
}