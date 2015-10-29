import React from 'react';

//
//  First example
//

class Ciao extends React.Component {
  render() {
    return (
      <div>Ciao, {this.props.name}</div>
    );
  }
}

export class CiaoHandler extends React.Component {
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

export class BoxHandler extends React.Component {
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


// 
// Third example
//

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

export class BoxWithStateHandler extends React.Component {
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

export class ClickableCounterHandler extends React.Component {
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

// 
// Fifth example
//

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

export class InputHandler extends React.Component {
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


// 
// Sixth example
//

class MyCustomComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {
            this.props.children 
            ? <div className='well'>{this.props.children}</div> 
            : <div className='alert alert-info'>No children :(</div>
        }
      </div>
    );
  }
}

export class CombinationHandler extends React.Component {
  render() {
    return (
      <div>
        <pre>{`
  ReactDOM.render(
    <div>
      <MyCustomComponent name='I haz chilrend'>
        <Ciao name='Devin Townsend!' />
        <Input />
        <BoxWithState title="Guitars" list={['Music man majesty', 'Ibanez', 'Jackson', 'Gibson']} />
      </MyCustomComponent>
      <MyCustomComponent name='I haz no children' />
    </div>
  , document.getElementById('wrapper'));
        `}</pre>
        <div>
          <MyCustomComponent name='I haz chilrend'>
            <Ciao name='Devin Townsend!' />
            <Input />
            <BoxWithState title="Guitars" list={['Music man majesty', 'Ibanez', 'Jackson', 'Gibson']} />
          </MyCustomComponent>
          <MyCustomComponent name='I haz no children' />
        </div>
      </div>
    )
  }
}