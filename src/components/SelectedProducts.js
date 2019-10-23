
import React, { useEffect } from 'react';

import Product from './Product';


import {  
    Typography
} from '@material-ui/core'  ; 



function Products({products}) {



   
    return (
        
            <div className="selectedProducts">

                <Typography variant="h3" style={{ fontSize : "1.5rem"}} className='h'> Selected Product</Typography>
                {
                  

                        products.map(p => {

                            return <Product prod={p} key={p.id} checkBoxExists={false} />

                        })

                   
                }

            </div>
    
    )
}






export default Products; 