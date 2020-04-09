import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component 
{

    constructor(props) 
    {
      super(props);
      this.state = {counter: 0};
    }

    incrementCounter = () => {this.setState( {counter: this.state.counter +  1} );}
    decrementCounter = () => {this.setState( {counter: this.state.counter -  1} );}

  render() 
  {
    return (
      <div>
        <h2>Counter Demo</h2>

        <h3>Counter: {this.state.counter}</h3>
      
        <button
          type="button"
          onClick={this.incrementCounter}
        >Increment Counter</button>

        <button
          type="button"
          onClick={this.decrementCounter}
        >Decrement Counter</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));