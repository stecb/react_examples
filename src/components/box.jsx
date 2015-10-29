import React from 'react';

//
//  Second example
//

class Box extends React.Component {
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

export default class BoxHandler extends React.Component {
  render() {
    return( 
      <div>
        <pre>{`
  class Box extends React.Component {
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

  ReactDOM.render(<Box title='Cool Box' list={['item 1', 'item 2', 'item 3', 'item N']} />, document.getElementById('wrapper'));
          `}
        </pre>
        <Box title="Cool Box" list={['item 1', 'item 2', 'item 3', 'item N']} />
      </div>
    );
  }
}
