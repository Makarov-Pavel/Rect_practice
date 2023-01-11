import React from "react";
import Counter from "./components/Counter/Counter";
import "./index.css";
import { useState } from "react";
import OpenModal from "./components/Modal/OpenModal";


function App() {
  const [state, setState] = useState(0);

  let links = [
    {id:1, name:'Counter'},
    {id:2, name:'Modal'},
    {id:3, name:'Counter'},
    {id:4, name:'Counter'}
  ];

  return (
    <div>
      <nav>
        <ul className="nav__list">
          {links.map((el) => (
            <li key={el.id}>
              <button className="nav__btn" onClick={()=>setState(el.id)}> {el.name} </button>
            </li>
          ))}
        </ul>
      </nav>

      {state === 1 && <Counter />}
      {state === 2 && <OpenModal />}
    </div>
  );

  
}

export default App;
