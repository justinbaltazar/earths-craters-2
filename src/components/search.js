import { filter, uniqBy } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './Astromap';
import data from '../assets/data.json';
import { updateCraters } from '../actions';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      allCraters: null,
      minAge: 0,
      maxAge: 2019,
      minMass: 0,
      maxMass: 23000000,
    };
    this.filterAge = this.filterAge.bind(this);
  }

  componentWillMount() {
    const raw = filter(data, (obj) => {
      return obj.fall === 'Fell';
    });

    const allCraters = uniqBy(raw, (obj) => {
      return obj.id;
    });
    this.setState({ allCraters });
    this.props.updateCraters(allCraters);
  }

  filterAge() {
    const results = filter(this.state.allCraters, (obj) => {
      return obj.year >= this.state.minAge && obj.year <= this.state.maxAge && (obj.mass === '' || (obj.mass >= this.state.minMass && obj.mass <= this.state.maxMass));
    });
    //    const sorted = sortBy(results, ['mass']).reverse();
    this.props.updateCraters(results);
  }

  render() {
    return (
      <div>
        <div id="search">
          <div>
            <b>Age:</b><br />
          Min: <input type="text"
            defaultValue="0"
            onChange={(e) => {
              this.setState({ minAge: e.target.value });
            }}
          /><br />
          Max: <input type="text"
            defaultValue="2019"
            onChange={(e) => {
              this.setState({ maxAge: e.target.value });
            }}
          /><br />
          </div>
          <div>
            <b>Mass:</b><br />
          Min: <input type="text"
            defaultValue="0"
            onChange={(e) => {
              this.setState({ minMass: e.target.value });
            }}
          /><br />
          Max: <input type="text"
            defaultValue="23000000"
            onChange={(e) => {
              this.setState({ maxMass: e.target.value });
            }}
          />
          </div>
          <center><button type="button" onClick={this.filterAge}>UPDATE</button></center>
        </div>
        <Map data={this.props.crater.displayedCraters} />
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = ({ crater }) => (
  {
    crater,
  }
);


export default connect(mapStateToProps, { updateCraters })(Search);
