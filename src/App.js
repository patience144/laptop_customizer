import React, { Component } from 'react';
import Header from './Header'
import MainForm from './MainForm/MainForm';
import MainSummary from './MainSummary/MainSummary';
import FEATURES from './data';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <MainForm 
            features={FEATURES}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <MainSummary
            state={this.state} 
            total={total}
          />
        </main>
      </div>
    );
  }
}

export default App;
