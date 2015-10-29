import React from 'react';
import { Ciao } from './ciao';
import { Input } from './input';
import { BoxWithState } from './boxwithstate';

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

export default class CombinationHandler extends React.Component {
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