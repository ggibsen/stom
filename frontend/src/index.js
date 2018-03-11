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
        this.moveChars = ['X', 'O'];
        this.turn = 0;
        this.state = {
            squares: Array(9).fill(null)
        };
    }

    renderSquare(i) {
        return <Square num={i} display={this.state.squares[i]}
            clickCallBack={() => this.handleClick(i)} />;
    }

    handleClick(index) {
        if ( this.state.squares[index] != null )  {
            // if square is assigned (already clicked) then ignore the click event
            return;
        }
        // best practice to keep state immutable, so here we're making a copy
        const newSquares = this.state.squares.slice();
        newSquares[index] = this.getMoveCharForTurn();
        // setState tells the comp its state has changed, therefore it invokes render()
        this.setState({ squares: newSquares });
    }

    getMoveCharForTurn() {
        return this.moveChars[(this.turn++) % 2];
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
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
