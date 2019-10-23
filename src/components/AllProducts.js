import React from 'react'
// import PropTypes from 'prop-types'
import Product from './Product';

import {
    Typography
} from '@material-ui/core';


function AllProducts({ products, handleAddToSecondList ,handleRemoveFromSecondList }) {

    return (
        <div className="allproducts">
            <Typography variant="h3" style={{ fontSize: "1.5rem" }} className="h"> ALL PRODUCTS</Typography>

            {


                products.map(p => {

                    return (
                        <Product

                            prod={p}

                            key={p.id}

                            addToSecondList={handleAddToSecondList}

                            removeFromSecondList={handleRemoveFromSecondList} 
                            
                            checkBoxExists={true}
                            />
                    )

                })


            }
        </div>
    )
}

// AllProducts.propTypes = {

// }

export default AllProducts

