import { useState } from 'react';
import Modal from './Modal';
import { ReactComponent as StarFilledSvg } from '../images/star-filled.svg';
import { ReactComponent as StarEmptySvg } from '../images/star-empty.svg';


function Card(props) {

    const starStyles = {
        height: 13,
        width: 16

    }

    const [ showModal,setShowModal ] = useState(false)

    const openModal = () => {
        setShowModal( prev => !prev)
    }

    return (
        <div className="card" >
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <div className="card-image" onClick={openModal}>
                <img src={props.path} id={props.name} alt='products'/>
            </div>
            <div className="card-info" onClick={openModal}>
                <p>{props.text}</p>
                <div>
                    <span className='rating-star'>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarEmptySvg style={starStyles}/>
                    </span>
                    <span className='rating-number'>34</span>
                </div>
                <div className='price'>$399.95</div>
            </div>
        </div>

    )
}

export default Card