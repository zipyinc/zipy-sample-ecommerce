import ModalImage from './modal/ModalImage';
import ModalContent from './modal/ModalContent';
import {fetchProduct} from '../API/api'
import { useEffect } from 'react';


function Modal(props) {

    const width = window.innerWidth
    let showImage = false
    showImage = width<975 ? true : false

    useEffect(() => {

        if(props.showModal) {
            fetchProduct();
        }
    }, [props.showModal])
    
    // checking innerWidth if it is for mobile device then we will not show 
    if( props.showModal===true && showImage===false) {
        return (
            <div id="modal-background">
                <div id="modal">
                    <ModalImage/>
                    <ModalContent setShowModal={props.setShowModal}/>
                </div>
            </div>
        )
    }
    else if(props.showModal===true && showImage===true) {
        return (
            <div id="modal-background">
                <div id="modal">
                    <ModalContent showImage={showImage} setShowModal={props.setShowModal}/>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

export default Modal