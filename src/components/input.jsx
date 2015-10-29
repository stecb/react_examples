import React from 'react';

// 
// Fifth example
//

export class Input extends React.Component {
  constructor() {
    super();
    this.state = {txt: ''};
  }
  componentDidMount() {
    this.refs.myInput.focus();
  }
  render() {
    return (
      <div>
        <input type='text' ref='myInput' placeholder='look!' onKeyUp={(evt) => this.setState({txt: evt.target.value})} />
        <span>{this.state.txt}</span>
      </div>
    );
  }
}

export default class InputHandler extends React.Component {
  render() {
    return (
      <div>
        <pre>{`
  class Input extends React.Component {
    componentDidMount() {
      this.refs.myInput.focus();
    }
    render() {
      return (
        <input type='text' ref='myInput' placeholder='look!' />
      );
    }
  }
  ReactDOM.render(<Input />, document.getElementById('wrapper'));
        `}</pre>
        <Input />
      </div>
    )
  }
}