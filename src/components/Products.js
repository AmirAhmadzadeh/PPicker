
import React, { useEffect } from 'react';
import data from './data';
import Product from './Product';
import useProducts from '../hooks/useProducts';
import useCurrProductIdx from '../hooks/useCurrProductIdx';


function Products() {
    const [products, setProducts] = useProducts([data[0]]);
    const [currProductIdx, setCurIdx] = useCurrProductIdx(1);

    function addTheProductsPerAsecond() {

        const pData = [];
        for (let index = currProductIdx; index < currProductIdx + 4; index++) {
            pData.push(data[index]);
        }
        setProducts(pData);
        setCurIdx(currProductIdx + 4);
    }

    useEffect(() => {

        setInterval(addTheProductsPerAsecond, 20000);
    })


    return (
        <div className="products">
            {
              products.map(p => {
                return (
                    <Product prod={p} key={p.id} />
                )
            })}
        </div>
    )
}






export default Products; 