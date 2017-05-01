import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import Button from '../Button/Button';
import Loading from '../../images/Loading.svg';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dices: [1, 1, 1, 1 ,1],
            tossing: false,
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
        this.setState({ tossing: true });

        setTimeout(() => {
            this.setState((prevState) => {
                const dices = prevState.dices.map(() => {
                    return this.getRandomDiceValue();
                });

                return { dices, tossing: false };
            });
        }, 1000);
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

            dices.push(1);

            return { dices };
        });
    }

    renderDices() {
        if (this.state.tossing) {
            return <img src={ Loading } alt="Loading" width="58px" height="58px" />
        }

        return this.state.dices.map((dice, i) => {
            return <Dice key={ i } value={ dice } color={ this.props.color } />;
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
