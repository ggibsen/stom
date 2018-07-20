import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/** 
 * because Square doesn't keep its own state, and tells its parent when its accessed,
 * this is example of 'Controlled Component'
 * */
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.clickCallBack}>
                {this.props.display}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            playerValSquares: Array(9).fill(0),
            playerChars: ['X', 'O'],
            turn: 0,
            gameOver: false
        };
    }

    renderSquare(i) {
        // in a class (board), we use an arrow function to access the correct this value for handleClick
        return <Square display={this.state.squares[i]}
            clickCallBack={() => this.handleClick(i)} />;
    }

    handleClick(index) {
        if (this.state.gameOver === true) {
            return;
        }
        if (this.state.squares[index] != null) {
            // if square is assigned (already clicked) then ignore the click event
            return;
        }
        // best practice to keep state immutable, so here we're making a copy
        const newSquares = this.state.squares.slice();
        const newPlayerValSquares = this.state.playerValSquares.slice();
        // modify the copy state
        newSquares[index] = this.getPlayerChar();
        newPlayerValSquares[index] = this.getPlayerValue();
        // see if we have a winner
        this.checkPlayerWin(newPlayerValSquares);
        this.changePlayerTurn();
        // setState tells the comp its state has changed, therefore it invokes render()
        this.setState({ squares: newSquares, playerValSquares: newPlayerValSquares });
    }

    /** 
     * Do summation of squares, testing for a abs summation of 3
    */
    checkPlayerWin(newPlayerValSquares) {
        if (this.isPlayerWin(newPlayerValSquares)) {
            this.state.gameOver = true;
            console.log("Congrats player " + this.getPlayerChar() + "!");
        }
    }

    isPlayerWin(newPlayerValSquares) {
        // first horizontal row checks
        return this.isPlayerWinAtIndices(newPlayerValSquares, 0, 1, 2) ||
            this.isPlayerWinAtIndices(newPlayerValSquares, 3, 4, 5) ||
            this.isPlayerWinAtIndices(newPlayerValSquares, 6, 7, 8) ||
            // now do veritical columns
            this.isPlayerWinAtIndices(newPlayerValSquares, 0, 3, 6) ||
            this.isPlayerWinAtIndices(newPlayerValSquares, 1, 4, 7) ||
            this.isPlayerWinAtIndices(newPlayerValSquares, 2, 5, 8) ||
            // lastly 2 diagnols
            this.isPlayerWinAtIndices(newPlayerValSquares, 0, 4, 8) ||
            this.isPlayerWinAtIndices(newPlayerValSquares, 2, 4, 6);
    }

    isPlayerWinAtIndices(newPlayerValSquares, i, j, k) {
        return Math.abs(newPlayerValSquares[i] + newPlayerValSquares[j] + newPlayerValSquares[k]) === 3;
    }

    changePlayerTurn() {
        if (this.state.gameOver === false) {
            this.state.turn++;
        }
    }

    getPlayerValue() {
        return "X" === this.getPlayerChar() ? 1 : -1;
    }

    getPlayerChar() {
        return this.state.playerChars[(this.state.turn) % 2];
    }

    render() {
        var status;
        if (this.state.gameOver) {
            status = 'Good job player ';
        }
        else {
            status = 'Next player: ';
        }

        return (
            <div>
                <div className="status">{status + this.getPlayerChar()}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
