import React from 'react';
import ReactDOM from 'react-dom';
import { CiaoHandler, BoxHandler, BoxWithStateHandler, ClickableCounterHandler, InputHandler, CombinationHandler } from './components/examples';
import { Router, Route, Link } from 'react-router';

require('./style/app.css');

const LINKS = ['example_1', 'example_2', 'example_3', 'example_4', 'example_5', 'example_6'];

class App extends React.Component {
  renderLink(l, path) {
    const link = `/${l}`;
    if (path === link) {
      return <li role="presentation" className="active" key={l}><a href="javascript:void(0)">{l}</a></li>
    } else {
      return <li key={l} role="presentation"><Link to={link}>{l}</Link></li>
    }
  }
  render() {
    const path = this.props.location.pathname;
    return (
      <div className='container'>
        <h1><Link to='/'>⚛ React examples</Link></h1>
        <ul className="nav nav-pills">
          {LINKS.map(l => this.renderLink(l, path))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
  <Route path="/" component={App}>
    <Route path="/example_1" component={CiaoHandler} />
    <Route path="/example_2" component={BoxHandler} />
    <Route path="/example_3" component={BoxWithStateHandler} />
    <Route path="/example_4" component={ClickableCounterHandler} />
    <Route path="/example_5" component={InputHandler} />
    <Route path="/example_6" component={CombinationHandler} />
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
