import React from 'react';
import ColorSelector from '../ColorSelector/ColorSelector';
import Board from '../Board/Board';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'color': ''
        };

        this.handleColorSelected = this.handleColorSelected.bind(this);
    }

    handleColorSelected(color) {
        this.setState({ color });
    }

    renderBody() {
        if (!this.state.color) {
            return <ColorSelector onColorSelected={ this.handleColorSelected } />;
        }

        return <Board color={ this.state.color } />
    }

    render() {
        return (
          <div className="App">
            <div className="App-Header">
                <h1>Perudo</h1>
            </div>
            <div className="App-Body">
                { this.renderBody() }
            </div>
          </div>
        );
    }
}

export default App;
