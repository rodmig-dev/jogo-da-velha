// Criação do elemento square que irá compor o tabuleiro do jogo da velha
import { useState } from 'react';
import './App.css';

// Componente Square
function Square({valor, onSquareClick}){
  /*const [valor, setValor] = useState(null)
  function handleClick(){
    setValor('X');
  }*/
  return(
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  )
}

export default function Tabuleiro(){
  const [xIsNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    if(nextSquares[i]){
      return;
    }
    if (xIsNext){
      nextSquares[i] = 'X';
      //setIsNext(false);
    }
    else{
      nextSquares[i] = 'O';
      //setIsNext(true);
    }
    setIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return(
    <div>
      <div>
        <Square valor={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square valor={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square valor={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>

      <div>
        <Square valor={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square valor={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square valor={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
        
      <div>
        <Square valor={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square valor={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square valor={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </div>
  );

}