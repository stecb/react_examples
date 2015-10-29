import React from 'react';

//
//  First example
//

export class Ciao extends React.Component {
  render() {
    return (
      <div>Ciao, {this.props.name}</div>
    );
  }
}

export default class CiaoHandler extends React.Component {
  render() {
    return (
      <div>
        <pre>{`
  class Ciao extends React.Component {
    render() {
      return (
        <div>Ciao, {this.props.name}</div>
      );
    }
  }
  ReactDOM.render(<Ciao name='Stefano' />, document.getElementById('wrapper'));
          `}
        </pre>
        <Ciao name='Stefano' />
      </div>
    )
  }
}