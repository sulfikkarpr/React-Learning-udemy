import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

export const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

const deriveWinner = (gameBoard, players) => {

  let winner;

  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirSquareSymbol) {
      winner = players[firstSquareSymbol];
    }

  }
  return winner;

}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square
    gameBoard[row][col] = player;
  }

  return gameBoard;

}

function App() {

  const [players, setPlayers] = useState(PLAYERS)

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);


  const hasDraw = gameTurns.length === 9 && !winner;



  const handleRematch = () => {
    setGameTurns([]);
  }


  const handleSquareClick = (rowIndex, colIndex) => {

    setGameTurns((prevTurn) => {

      let currentPlayer = derivedActivePlayer(prevTurn);

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn];

      return updatedTurn;

    })

  }

  function handlePlayerNameChanged(symbol, newName) {

    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })

  }

  return (
    <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChanged} />
          <Player name={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChanged} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}

        <GameBoard onSelectSquare={handleSquareClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
