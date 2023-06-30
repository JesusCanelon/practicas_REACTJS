import { useState, useEffect } from 'react';
import './index.css';
import { Tablero } from './components/Tablero.jsx';
import { TURNS } from './Logic/Constantes.js';
import { WinnersModal } from './components/WinnersModal.jsx';
import { checkWinner, checkEndGame } from './Logic/Board.js';

//SOCKET.IO
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [estado, setEstado] = useState(true);

  //Metodos
  const restarGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    socket.emit("restar", {
      board: Array(9).fill(null),
      turn: TURNS.X,
      winner: null
    })
  }


  const updateBoard = (index) => {

    //Esta condicinal nos ayudara a reescribir el turno si existe algo en esa posicion
    if (board[index] || winner) return

    //Esto es para actualizar el board, es decir, las selecciones en el juego
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    

    //Aqui es para cambiar el estado del turno, sea de la X u O
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Comprobar ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
        setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
        setWinner(false); //Empate
    }

    //Establezco estado en false hasta que toque el turno nuevamente
    setEstado(false);

    //Envio de movimiento por socket.io
    socket.emit("move", {
      board: newBoard,
      turn: newTurn,
      estado: estado,
      winner: newWinner
    })
  }


  //COSAS DEL SOCKET.IO
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", {message: message})
    setMessage('');
  }

  useEffect(() => {
    socket.on("message", data => {
      console.log(data.message);
    })

    //Capturar movimiento del jugador contrario
    socket.on("move", data => {
      setBoard(data.board);
      setTurn(data.turn);
      setEstado(data.estado);

      //Comprobar ganador
      if (data.winner) {
        setWinner(data.winner);
      } else if (checkEndGame(data.board)) {
        setWinner(false); //Empate
      }
    })

    //Capturar si el juegador reinicio el juego
    socket.on("restar", data => {
      setBoard(data.board);
      setTurn(data.turn);
      setWinner(data.winner);
    })
  }, [])
  

  return (
    <>
      <main className='board'>
        <h1>Er Chiki Taka</h1>
        {/* <h5>{isConnected ? 'Te has conectado al juego' : 'Error'}</h5> */}
        
        <form onSubmit={sendMessage}>
          <input value={message} type='text' placeholder='Escribe...' onChange={(e) => setMessage(e.target.value)}></input>
          <button type='submit'>SEND</button>
        </form>
        
        <section className='board-h'>
          <Tablero estado={estado} winner={winner} turn={turn} board={board} updateBoard={updateBoard}></Tablero>
          <WinnersModal winner={winner} restarGame={restarGame}></WinnersModal>
        </section>
        

      </main>
    </>
  )
}

export default App
