


import React , { useEffect } from 'react' ; 

import StyledCheckbox from './UI/CheckBox' ; 

import useBooleanState from './../hooks/useBoolean' ; 

function Product(props) {

    const [selectedProduct , setSelectedProduct] = useBooleanState(false) ; 

    function handleClicked(e) {

        // console.log(e.target.value) ; 
        
        setSelectedProduct() ; 
   
    }
    // console.log(props) ; 
    useEffect(() => {

         if ( selectedProduct ) props.addToSecondList([props.prod])  ;
        //  else if ( !selectedProduct)     
    }, [selectedProduct]) 

    return (

        <div className="product">

            <p>{props.prod.name}</p>

            <p>{props.prod.id}</p>

            <p>{props.prod.weight}</p>
            
            <StyledCheckbox onClick={handleClicked} value={selectedProduct} />

        </div>

    )  

}

export default Product
