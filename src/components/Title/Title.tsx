import React, { useState , useEffect} from "react"
import './Title.css';

function Title (props: any) {
  const [num, setNum] = useState(0);

  useEffect(()=>{
    document.title= `Clicou ${num} vezes`;

    return () => {

    }
  },[num]);
    return(
      <>
    <h1>clique pra apresentar um numero {num} vezes {props.nome}!</h1>
    <button onClick={() => setNum(num + 1)}>
      +
    </button>
    <button onClick={() => setNum(num - 1)}>
      -
    </button>
    </>
    
    
    

      );
      
    }
    
    export {Title};