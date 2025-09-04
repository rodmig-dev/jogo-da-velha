// Criação do elemento square que irá compor o tabuleiro do jogo da velha
import { useState } from 'react';
import './App.css';

// Componente Square
function Square(){
  const [valor, setValor] = useState(null)
  function handleClick(){
    setValor('X');
  }
  return(
    <button className="square" onClick={handleClick}>
      {valor}
    </button>
  )
}

export default function Tabuleiro(){
  return(
    <div>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
        
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );

}