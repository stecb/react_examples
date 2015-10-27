import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

export class Ciao extends React.Component {
  render() {
    return (
      <div>Ciao, {this.props.name}</div>
    );
  }
}

export class Box extends React.Component {
  render() {
    const list = this.props.list.map(item => <li key={item}>{item}</li>);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<div>
  <Ciao name='Stefanissimo' />
  <Box title="Cool Box" list={['item 1', 'item 2', 'item 3', 'item N']} />
  </div>, document.getElementById('app'))
