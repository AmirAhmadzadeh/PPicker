


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
