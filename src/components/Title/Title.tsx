import React, { useState } from "react"
import './Title.css';

function Title (props: any) {
  const [num, setNum] = useState(0);
    return(
      <>
    <h1>clique pra apresentar um numero {num} vezes {props.nome}!</h1>
    <button onClick={() => setNum(num + 1)}>
      clique aqui
    </button>
    </>

      );
      
    }
    
    export {Title};