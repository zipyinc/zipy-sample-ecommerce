function ModalImage() {
    return (
        <div className="modal-image-section">
            <div id="modal-main-image-section">
                <img src={require('../../images/modal-shoes.png')} id='modal-main-image' alt="modal-images" />
            </div>
            <div id="modal-template-image-section">
                <div>
                    <img src={require('../../images/modal-shoes-view-1.png')} id=
                    'modal-template-image-1'
                    alt="modal-images"
                    />
                </div>
                <div>
                    <img src={require('../../images/modal-shoes-view-2.png')} id=
                    'modal-template-image-2'
                     alt="modal-images"
                    />
                </div>
                <div>
                    <img src={require('../../images/modal-shoes-view-3.png')} id=
                    'modal-template-image-3' alt="modal-images"/>  
                </div>
            </div>
        </div>
    )
}

export default ModalImage