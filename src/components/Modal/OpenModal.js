import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import './OpenModal.css'

function OpenModal(){
    const [state, setState] = useState(false);

    function clickOnBtn(){
        setState(true) 
    }

    function clickOnCloseBtn(){
        setState(false)
    }

    return(
        <div className="open-modal-container" >
            
            {state === false && 
            <button className="open-modal-btn" onClick={clickOnBtn} >
                Открыть модалку
            </button>}
            {state === true && <Modal closeModal={clickOnCloseBtn}/>}
        </div>
    )
}

export default OpenModal; 