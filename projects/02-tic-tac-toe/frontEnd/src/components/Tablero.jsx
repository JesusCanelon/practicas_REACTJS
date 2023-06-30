import { Square } from "./Square.jsx";
import { TURNS } from "../Logic/Constantes.js";


export function Tablero({ winner, board, turn, updateBoard, estado }) {
    return (
        <div className={winner !== null ? 'tabla bloqueado' : 'tabla'}>
            <section className='game'>
                {board.map((inde, index) => {
                    return (
                        <Square estado={estado} updateBoard={updateBoard} key={index} index={index}>{board[index]}</Square>
                    )
                })}
            </section>
            <div className='turn'>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </div>
        </div>
    )

}
