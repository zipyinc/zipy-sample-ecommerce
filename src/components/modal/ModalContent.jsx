import ModalRatingSection from './ModalRatingSection';
import ModalPriceSection from './ModalPriceSection';
import ModalDescriptionSection from './ModalDescriptionSection';
import ModalTableSection from './ModalTableSection';
import ModalProductSection from './ModalProductSection';
import ModalButtonSection from './ModalButtonSection';
import ModalImage from './ModalImage';
import { ReactComponent as ModalCrossSvg } from '../../images/modal-cross.svg';

function ModalContent(props) {

    

    return (
        <div className="modal-content-section">
            <div id='modal-cross' onClick={() => props.setShowModal( prev => !prev)}>
                <ModalCrossSvg/>
            </div>
            {props.showImage && <ModalImage/>}

            <div className="modal-container">
                <h1>Off-White Odsy-1000 Low-Top Sneakers</h1>
                <ModalRatingSection/>
                <ModalPriceSection/>
                <ModalDescriptionSection/>
                <ModalTableSection/>
                {/* {props.showImage && <ModalImage/>} */}
                <ModalProductSection/>
                <ModalButtonSection/>
            </div>
        </div>
    )
}

export default ModalContent