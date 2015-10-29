import React from 'react';

// 
// Third example
//

export class BoxWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasDetailsVisible: false};
  }
  handleToggle() {
    this.setState({
      hasDetailsVisible: !this.state.hasDetailsVisible
    });
  }
  render() {
    const list = this.props.list.map(item => <li key={item}>{item}</li>);
    const detailsStyle = {display: this.state.hasDetailsVisible ? 'block' : 'none'};
    return (
      <div style={{marginBottom: '20px'}}>
        <h1>{this.props.title}</h1>
        <button onClick={() => this.handleToggle()}>toggle details</button>
        <ul style={detailsStyle}>
          {list}
        </ul>
      </div>
    );
  }
}

export default class BoxWithStateHandler extends React.Component {
  render() {
    return (
      <div>
        <pre>{`
  class BoxWithState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {hasDetailsVisible: false};
    }
    handleToggle() {
      this.setState({
        hasDetailsVisible: !this.state.hasDetailsVisible
      });
    }
    render() {
      const list = this.props.list.map(item => <li key={item}>{item}</li>);
      const detailsStyle = this.state.hasDetailsVisible ? {display: 'block'} : {display: 'none'};
      return (
        <div>
          <h1>{this.props.title}</h1>
          <button onClick={() => this.handleToggle()}>toggle details</button>
          <ul style={detailsStyle}>
            {list}
          </ul>
        </div>
      );
    }
  }
  ReactDOM.render(<BoxWithState title="Cool Box With State" list={['item 1', 'item 2', 'item 3', 'item N']} />, document.getElementById('wrapper'));
        `}</pre>
        <BoxWithState title="Cool Box With State" list={['item 1', 'item 2', 'item 3', 'item N']} />
      </div>
    );
  }
}
