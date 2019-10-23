


import React, { useEffect } from 'react';

import StyledCheckbox from './UI/CheckBox';

import useValueText from '../hooks/useValueText';

import { SELECTED, UNSELECTED } from './constants';


function Product(props) {

    const [selectedProductStatus, setSelectedProductStatus] = useValueText();

    function handleClicked(e) {

        // console.log(e.target.value) ; 

        if (selectedProductStatus === null) {

            setSelectedProductStatus(SELECTED)

        }
        else if (selectedProductStatus === SELECTED) {

            setSelectedProductStatus(UNSELECTED)

        }
        else if (selectedProductStatus === UNSELECTED) {

            setSelectedProductStatus(SELECTED);

        }

    }
    // console.log(props) ; 
    useEffect(() => {

        // console.log('ehlooooo')
        if (selectedProductStatus === SELECTED) props.addToSecondList([props.prod]);
        else if (selectedProductStatus === UNSELECTED) props.removeFromSecondList(props.prod);

    }, [selectedProductStatus])

    return (

        <div className="product">

            <p>{props.prod.name}</p>

            <p>{props.prod.id}</p>

            <p>{props.prod.weight}</p>

            {
                props.checkBoxExists ?
                    (
                        <StyledCheckbox

                            onClick={handleClicked}

                            value={selectedProductStatus} />

                    ) : null
            }

        </div>

    )

}

export default Product
