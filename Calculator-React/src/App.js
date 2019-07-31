import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  extendInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleOutput = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  render() {
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
          </div>
          <div className="row">
            <Button handleClick={this.extendInput}>7</Button>
            <Button handleClick={this.extendInput}>8</Button>
            <Button handleClick={this.extendInput}>9</Button>
            <Button handleClick={this.extendInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.extendInput}>4</Button>
            <Button handleClick={this.extendInput}>5</Button>
            <Button handleClick={this.extendInput}>6</Button>
            <Button handleClick={this.extendInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.extendInput}>1</Button>
            <Button handleClick={this.extendInput}>2</Button>
            <Button handleClick={this.extendInput}>3</Button>
            <Button handleClick={this.extendInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.extendInput}>0</Button>
            <Button handleClick={this.extendInput}>.</Button>
            <Button handleClick={() => this.handleOutput()}>=</Button>
            <Button handleClick={this.extendInput}>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
