import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import Button from '../Button/Button';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dices: [
                { id: 1, value: 1 },
                { id: 2, value: 1 },
                { id: 3, value: 1 },
                { id: 4, value: 1 },
                { id: 5, value: 1 }
            ],
            gameOver: false
        }

        this.handleTossDicesClick = this.handleTossDicesClick.bind(this);
        this.handleLoseDiceClick = this.handleLoseDiceClick.bind(this);
        this.handleWinDiceClick = this.handleWinDiceClick.bind(this);
    }

    getRandomDiceValue() {
        return Math.floor(Math.random() * 6) + 1;
    }

    handleTossDicesClick() {
        this.setState((prevState) => {
            const dices = prevState.dices.map((dice) => {
                return { id: dice.id, value: this.getRandomDiceValue() };
            });

            return { dices };
        });
    }

    handleLoseDiceClick() {
        this.setState((prevState) => {
            const dices = [...prevState.dices];
            dices.pop();

            if (!dices.length) return { dices, gameOver: true }

            return { dices }
        });
    }

    handleWinDiceClick() {
        this.setState((prevState) => {
            const dices = [...prevState.dices];

            if (dices.length === 5) return { dices };

            dices.push({ id: dices[dices.length - 1].id + 1, value: 1 });

            return { dices };
        });
    }

    renderDices() {
        return this.state.dices.map((dice) => {
            return <Dice key={ dice.id } value={ dice.value } color={ this.props.color } />;
        });
    }

    render() {
        if (this.state.gameOver) {
            return (
                <div className="Board">
                    Perdu !
                </div>
            );
        }

        return (
            <div className="Board">
                <div className="Board-Dices">
                    { this.renderDices() }
                </div>
                <div className="Board-Actions">
                    <Button text="Lancer les dés" onClick={ this.handleTossDicesClick } />
                    <Button text="Perdre un dé" onClick={ this.handleLoseDiceClick } />
                    <Button text="Gagner un dé" onClick={ this.handleWinDiceClick } />
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    color: PropTypes.string
};

export default Board;
