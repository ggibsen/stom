import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);  // always pass along ctor args to parent
        this.state = {
            value: null
        };
    }
    render() {
        return (
            // setState tells the comp its state has changed, therefore it invokes render()
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i, letter) {
        if ( !letter ) {
            letter = '?';
        }
        return <Square num={i} letter={letter} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, 'a')}
                    {this.renderSquare(1, 'b')}
                    {this.renderSquare(2, 'c')}
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
