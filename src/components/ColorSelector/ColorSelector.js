import React from 'react';
import PropTypes from 'prop-types';
import './ColorSelector.css';

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [
                '#2ecc71',
                '#3498db',
                '#f1c40f',
                '#e67e22',
                '#e74c3c',
                '#9b59b6'
            ]
        }
    }

    renderColors() {
        return this.state.colors.map((color, i) => {
            return (
                <div
                    key={ i }
                    style={ { 'backgroundColor': color } }
                    onClick={ this.props.onColorSelected.bind(null, color) }
                >
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ColorSelector">
                <p>Choisis ta couleur</p>
                <div className="ColorSelector-Colors">
                    { this.renderColors() }
                </div>
            </div>
        );
    }
}

ColorSelector.propTypes = {
    onColorSelected: PropTypes.func
};

export default ColorSelector;
