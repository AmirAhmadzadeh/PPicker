
import React, { useEffect } from 'react';

import data from './data';


import useProducts from '../hooks/useProducts';

import useCurrProductIdx from '../hooks/useCurrProductIdx';

import { TIMER_OF_ADDING } from './constants'

import AllProducts from './AllProducts' ; 

import SelectedProducts from './SelectedProducts'  ; 



function Products() {

    const [products, setProducts] = useProducts([]);

    const [currProductIdx, setCurIdx] = useCurrProductIdx(0);

    const [selectedProducts, setSelectedProducts , resetProducts ] = useProducts([]);

    function handleAdd(prod){

       

        const res = selectedProducts.findIndex(p => {
             return p.id === prod[0].id
        }) ; 
        

        if (res === -1)  setSelectedProducts(prod)  ;
        
       
    
    }


    function handleRemove(prd) {

        // console.log('helooo from remove', prd) ;

        const newSelectedProds =  selectedProducts.filter(p => {
            return p.id !== prd.id  ; 
        })
        
        resetProducts(newSelectedProds) ; 

    }

    function addTheProductsPerAsecond() {

        const pData = [];

        for (let index = currProductIdx; index < currProductIdx + 4; index++) {

            pData.push(data[index]);

        }


        setProducts(pData);

        setCurIdx(currProductIdx + 4);

    }


    useEffect(() => {

        const interval = setInterval(addTheProductsPerAsecond, TIMER_OF_ADDING);

        return () => clearInterval(interval);

    })

    // console.log(selectedProducts , 'hoooooo') ; 
    return (

        <div className="products">
            
            <AllProducts 
            
             handleAddToSecondList={handleAdd}
             
             products={products}
             
             handleRemoveFromSecondList={handleRemove}
            
            />

            <SelectedProducts products={selectedProducts}/>
        </div>

    )
}






export default Products; 