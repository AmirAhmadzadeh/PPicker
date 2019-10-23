
import React, { useEffect } from 'react';

import data from './data';

import Product from './Product';

import useProducts from '../hooks/useProducts';

import useCurrProductIdx from '../hooks/useCurrProductIdx';

import { TIMER_OF_ADDING } from './constants'

import AllProducts from './AllProducts' ; 

import SelectedProducts from './SelectedProducts'  ; 



function Products() {

    const [products, setProducts] = useProducts([]);

    const [currProductIdx, setCurIdx] = useCurrProductIdx(0);

    const [selectedProducts, setSelectedProducts] = useProducts([]);

    function handleAddToSecondList(prod){

        console.log('amirr is here' , prod) ; 
        
        setSelectedProducts(prod)
    
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
            <AllProducts handleAddToSecondList={handleAddToSecondList} products={products} />
            <SelectedProducts products={selectedProducts}/>
        </div>

    )
}






export default Products; 