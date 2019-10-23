
<<<<<<< HEAD


import React from 'react' ; 

function Product({prod}) {
    return (

        <div className="product">
            <p>{prod.name}</p>
            <p>{prod.id}</p>
            <p>{prod.weight}</p>
        </div>

    )
}

export default Product
=======
import React, { useState, useEffect } from 'react';
import data from './data';
import initProdcus from './initProducts' ; 

function Products() {
    const [products, setProducts] = useState([...initProdcus]);

    useEffect(() => {

        setInterval(() => {
            data.map(p => {
                if (products.length === 0) {
                     setProducts(p)   
                }else { 
                    setProducts([...products, p])
                }
            })
        }, 1000);
    })


    return (
        <div>
           {!products ? null : products.map(p => {
               return (<div>
                   <span>{p.name}</span>
                   <span>{p.id}</span>
                   <span>{p.weight}</span>
                    <input type='checkbox' /> 
               </div> ) 
           })}     
        </div>
    )
}




// class Products extends React.Component { 

//     state = { 
//         products : Array(1000).fill({})
//     }

//     componentDidMount = () => { 
//             this.state.products.map(p => {

//             })
//     }
//     render(){
//         return (
//             <div>

//             </div>
//         )
//     }
// }



export default Products; 
>>>>>>> origin/master
