import React from "react";
import './Modal.css'

function Modal(props){

    return(
        <div>
            <div className="modal-wrapper">
            
        </div>
        <div className="modal-container">
                <button className="modal-container__close-btn" onClick={props.closeModal}>X</button>
                <h3 className="modal-container__title">Модальное окно</h3>
                <p className="modal-container__para">Модальное окно в графическом интерфейсе пользователя — окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет. Модальными преимущественно реализованы диалоговые окна.</p>
            </div>
        </div>
         
    )
}

export default Modal;