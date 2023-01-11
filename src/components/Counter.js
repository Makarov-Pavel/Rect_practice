import React from "react";
import { useState } from "react";

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
        <div>
            <h3>{state}</h3>
            <button className="btn plusBtn" onClick={clickPlusBtn} >Увеличить на 1</button>
            <button className="btn minusBtn" onClick={clickMinusBtn} >Уменьшить на 1</button>
            <button className="btn reset" onClick={resetBtn} >Сбросить</button>

        </div>
    )
}

export default Counter