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

    render() {
        if (!this.state.color) {
            return (
              <div className="App">
                <ColorSelector onColorSelected={ this.handleColorSelected } />
              </div>
            );
        }

        return (
          <div className="App">
            <Board color={ this.state.color } />
          </div>
        );
    }
}

export default App;
