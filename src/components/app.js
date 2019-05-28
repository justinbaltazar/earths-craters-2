import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Search from './search';
import '../style.scss';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Welcome = (props) => {
  return (
    <Search />
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
