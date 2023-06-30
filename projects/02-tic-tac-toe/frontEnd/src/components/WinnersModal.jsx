import { Square } from "./Square";


export function WinnersModal({winner, restarGame}) {
    if (winner === null) return null;

    return (
        <section className='winner'>
            <h2>{winner === false ? 'Empatados!' : 'Ha ganado: '}</h2>

            <div className='win'>
                {winner && <Square>{winner}</Square>}
            </div>
            <div className='contRestar'>
                <button onClick={restarGame}>Restart Game</button>
            </div>
        </section>
    )

}