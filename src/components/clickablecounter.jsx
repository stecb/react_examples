import React from 'react';

// 
// Fourth example
//

class ClickableCounter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }
  increaseCounter() {
    this.setState({
      count: ++this.state.count
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increaseCounter()}>Click here Luke!</button>
        &nbsp;
        <span className="label label-primary">{this.state.count}</span>
      </div>
    );
  }
}

export default class ClickableCounterHandler extends React.Component {
  render() {
    return (
      <div>
        <pre>{`
  class ClickableCounter extends React.Component {
    constructor() {
      super();
      this.state = {count: 0};
    }
    increaseCounter() {
      this.setState({
        count: ++this.state.count
      });
    }
    render() {
      return (
        <div>
          <button onClick={() => this.increaseCounter()}>Click here Luke!</button>
          &nbsp;
          <span className="label label-primary">{this.state.count}</span>
        </div>
      );
    }
  }
  ReactDOM.render(<ClickableCounter />, document.getElementById('wrapper'));
          `}</pre>
        <ClickableCounter />
      </div>
    )
  }
}