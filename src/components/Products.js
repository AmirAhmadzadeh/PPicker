
import React, { useEffect } from 'react';

import data from './data';

import Product from './Product';

import useProducts from '../hooks/useProducts';

import useCurrProductIdx from '../hooks/useCurrProductIdx';

import { TIMER_OF_ADDING } from './constants'


const StoreContext = React.createContext();



function Products() {

    const [products, setProducts] = useProducts([]);

    const [currProductIdx, setCurIdx] = useCurrProductIdx(0);


    function addTheProductsPerAsecond() {

        const pData = [];

        for (let index = currProductIdx; index < currProductIdx + 4; index++) {

            pData.push(data[index]);

        }


        setProducts(pData);

        setCurIdx(currProductIdx + 4);

    }

    
    useEffect(() => {
     
        const interval =setInterval(addTheProductsPerAsecond, TIMER_OF_ADDING) ; 
     
        return () => clearInterval(interval);

    })

    console.log('amir is here ', products, currProductIdx);

    return (
        <StoreContext.Provider value={products}>
            <div className="products">
                {
                  

                        products.map(p => {

                            return <Product prod={p} key={p.id} />

                        })

                   
                }

            </div>
        </StoreContext.Provider>
    )
}






export default Products; 