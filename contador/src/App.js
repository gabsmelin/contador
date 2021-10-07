import { useState } from "react";
import "./App.js";

import { Container } from "./styled.js";


export default function Pai(props) {
  const [contador, setContador] = useState(0)

  function contarma() {
    let r = setContador(contador + 1);
    return r;
  }

  function contarme() {
    let r = setContador (contador - 1);
    return r;
  }

  function reset() {
    let r = setContador(0) 
    return r;
  } 

  return (
    <Container>
      <div className="b1">
        <div className="t">Contador</div>
        <div className="c">
          <div className="mais"><button onClick={contarme}>-</button></div>
          <div className="vava">{contador}</div>
          <div className="mais"><button onClick={contarma}>+</button></div>
        </div>

        <div className="b2">
          <Filho reset={reset} qtd={contador} />
        </div>
      </div>
    </Container>
  );

function Filho(props) {
  function Reset() {
    props.reset();
  }

  //function total() {
  //  setContador(contador * 3);
  //}

  return(
    <div className="container">
      <button onClick={Reset}>Resetar</button>
      <div className="qtd">{props.qtd * 500}</div>
    </div>
  )
}
}

