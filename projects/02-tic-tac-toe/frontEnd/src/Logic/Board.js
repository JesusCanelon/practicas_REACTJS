import { winner_combos } from "./Constantes.js";


export const checkWinner = (boardToCheck) => {
    for (const combo of winner_combos) {
        const [a, b, c] = combo;

        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            //Si hay ganador retorna
            return boardToCheck[a];
        }
    }
    //Si no hay ganador
    return null;
}


export const checkEndGame = (newBoard) => {
    //Esta funcion flecha es para validar la culminacion del juego

    return newBoard.every((board) => board !== null);
}