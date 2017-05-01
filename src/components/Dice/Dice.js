import React from 'react';
import PropTypes from 'prop-types';
import Dice1 from '../../images/Dice1.svg';
import Dice2 from '../../images/Dice2.svg';
import Dice3 from '../../images/Dice3.svg';
import Dice4 from '../../images/Dice4.svg';
import Dice5 from '../../images/Dice5.svg';
import Dice6 from '../../images/Dice6.svg';
import './Dice.css';

const Dice = (props) => (
  <div className="Dice" style={ { 'backgroundColor': props.color } }>
    { props.value === 1 &&
        <img src={ Dice1 } alt="Dice 1" width="100%" height="100%" />
    }
    { props.value === 2 &&
        <img src={ Dice2 } alt="Dice 2" width="100%" height="100%" />
    }
    { props.value === 3 &&
        <img src={ Dice3 } alt="Dice 3" width="100%" height="100%" />
    }
    { props.value === 4 &&
        <img src={ Dice4 } alt="Dice 4" width="100%" height="100%" />
    }
    { props.value === 5 &&
        <img src={ Dice5 } alt="Dice 5" width="100%" height="100%" />
    }
    { props.value === 6 &&
        <img src={ Dice6 } alt="Dice 6" width="100%" height="100%" />
    }
  </div>
);

Dice.propTypes = {
    value: PropTypes.number,
    color: PropTypes.string
};

export default Dice;
