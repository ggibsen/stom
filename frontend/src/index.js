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
            <button className="square" onClick={() => this.props.clickCallBack()}>
                {this.props.display}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.playerChars = ['X', 'O'];
        this.turn = 0;
        this.gameOver = false;
        this.state = {
            squares: Array(9).fill(null),
            playerValSquares: Array(9).fill(0)
        };
    }

    renderSquare(i) {
        return <Square display={this.state.squares[i]}
            clickCallBack={() => this.handleClick(i)} />;
    }

    handleClick(index) {
        if (this.gameOver === true) {
            return;
        }
        if (this.state.squares[index] != null) {
            // if square is assigned (already clicked) then ignore the click event
            return;
        }
        // best practice to keep state immutable, so here we're making a copy
        const newSquares = this.state.squares.slice();
        newSquares[index] = this.getPlayerChar();
        // set state directly, to avoid extra render
        this.state.playerValSquares[index] = this.getPlayerValue();
        this.checkPlayerWin();
        this.changePlayerTurn();
        // setState tells the comp its state has changed, therefore it invokes render()
        this.setState({ squares: newSquares });
    }

    /** 
     * Do summation of squares, testing for a abs summation of 3
    */
    checkPlayerWin() {
        if (this.isPlayerWin()) {
            this.gameOver = true;
            alert("Congrats player " + this.getPlayerChar() + "!");
        }
    }

    isPlayerWin() {
        // first horizontal row checks
        return this.isPlayerWinAtIndices(0, 1, 2) ||
            this.isPlayerWinAtIndices(3, 4, 5) ||
            this.isPlayerWinAtIndices(6, 7, 8) ||
            // now do veritical columns
            this.isPlayerWinAtIndices(0, 3, 6) ||
            this.isPlayerWinAtIndices(1, 4, 7) ||
            this.isPlayerWinAtIndices(2, 5, 8) ||
            // lastly 2 diagnols
            this.isPlayerWinAtIndices(0, 4, 8) ||
            this.isPlayerWinAtIndices(2, 4, 6);
    }

    isPlayerWinAtIndices(i, j, k) {
        return Math.abs(this.state.playerValSquares[i] + this.state.playerValSquares[j] + this.state.playerValSquares[k]) === 3;
    }

    changePlayerTurn() {
        if (this.gameOver === false) {
            this.turn++;
        }
    }

    getPlayerValue() {
        return "X" === this.getPlayerChar() ? 1 : -1;
    }

    getPlayerChar() {
        return this.playerChars[(this.turn) % 2];
    }

    render() {
        var status;
        if (this.gameOver) {
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
