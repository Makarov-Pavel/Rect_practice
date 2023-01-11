import React from "react";
import { useState } from "react";
import './Counter.css'

function Counter(){
    const [state, setState] = useState(0);

    const clickPlusBtn= function(){
        setState(state+1)
    }
    const clickMinusBtn= function(){
        setState(state-1)
    }
    const resetBtn= function(){
        setState(0)
    }

    return(
        <div className="counter-container">
            <h3 className="count-number">{state}</h3>
            <div>
                <button className="btn plusBtn" onClick={clickPlusBtn} >Увеличить на 1</button>
                <button className="btn minusBtn" onClick={clickMinusBtn} >Уменьшить на 1</button>
                <button className="btn reset" onClick={resetBtn} >Сбросить</button> 
            </div>
            
        </div>
    )
}

export default Counter