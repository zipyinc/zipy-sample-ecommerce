import { useState } from 'react';
import { ReactComponent as  CartSvg} from '../../images/modal-cart.svg';
import {buyProduct} from '../../API/api'


function ModalButtonSection(props) {


    const handleAddToCart = () => {

        let cart = {};
        
        const newCart = cart.items.map(i => i.item);

        console.log(newCart);
    }

    const handleBuy = () => {
        const buy = buyProduct()
    }
    
    return (
        <div id="modal-button-section">
            <button className='pointer' id='buy-now' onClick={handleBuy}>Buy Now</button>
            <button className='pointer' id='add-to-cart' onClick={handleAddToCart} >Add to Cart <CartSvg/></button>
        </div>
    )
}


export default ModalButtonSection
