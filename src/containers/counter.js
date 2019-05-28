import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../components/search';

// this can be dumb or smart component - connect works with either
const Counter = (props) => {
  return (
    <div>
      <Search />
      Current Count: {props.count}
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    count: state.count,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, null)(Counter));
