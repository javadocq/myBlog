import { useState, useEffect } from 'react';
import '../style/Modal.css';

export default function Modal(props) {
    const [modal, setModal] = useState(props.modal);

    useEffect(() => {
        setModal(props.modal);
    }, [props.modal]);

    function closeModal() {
        setModal(false);
    }

    return (
        <>
            {
                (modal === true) ?
                    <div className="modal">
                        <img src={props.img} alt="" className="image" />
                        <div className='content'>
                            <h2>{props.content.title}</h2>
                            <p>{props.content.content}</p>
                            <button className="close" onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}
