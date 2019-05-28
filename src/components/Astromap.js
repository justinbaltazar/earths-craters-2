import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { filter } from 'lodash';


const Map = new ReactMapboxGl({
  zoom: 0,
  accessToken: 'pk.eyJ1IjoibG91aXNtdXJlcndhIiwiYSI6ImNqdzVrenZuMzEwODYzenMwenpoam1vZXIifQ.JtmP2d609w0pZ0dmmlZBCA',
});

class Astromap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: [0],
      currentPoint: null,
    };
  }

  markerClick(value) {
    console.log(value);
    this.setState({ currentPoint: value });
  }

  filterByMass(min, max) {
    const results = filter(this.props.data, (obj) => {
      return obj.mass >= min && obj.mass <= max;
    });
    return results;
  }

  showPopup() {
    if (this.state.currentPoint !== null) {
      console.log('NOT NULL!');
      return (
        <div id="popup">
          <h3>{this.state.currentPoint.name}</h3>
          <h5>Year: {this.state.currentPoint.year}</h5>
          <h5>Class: {this.state.currentPoint.recclass}</h5>
          <h5>Mass: {this.state.currentPoint.mass}</h5>
        </div>
      );
    } else {
      return '';
    }
  }

  render() {
    // const { lng, lat, zoom } = this.state;

    if (this.props.data.length !== 0) {
      // console.log(this.props.data);
      return (
          // eslint-disable-next-line
          <Map style="mapbox://styles/mapbox/dark-v9"
            zoom={this.state.zoom}
            containerStyle={{
              height: '100vh',
              width: '100vw',
            }}
          >
            {this.showPopup()}
            <Layer
              // key={value.id}
              id="marker"
              type="circle"
              paint={{
                'circle-color': '#1565c0',


                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(0, 23).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            <Layer
              // key={value.id}
              id="hellothere"
              type="circle"
              paint={{
                'circle-color': '#f44336',

                'circle-radius': 2,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(24, 230).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            <Layer
              // key={value.id}
              id="hellothere2"
              type="circle"
              paint={{
                'circle-color': '#4a148c',

                'circle-radius': 3,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(231, 2300).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            <Layer
              // key={value.id}
              id="hellothere3"
              type="circle"
              paint={{
                'circle-color': '#3f51b5',

                'circle-radius': 4,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(2301, 23000).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            <Layer
              // key={value.id}
              id="hellothere4"
              type="circle"
              paint={{
                'circle-color': '#00bcd4',

                'circle-radius': 5,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(23001, 230000).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            <Layer
              // key={value.id}
              id="hellothere5"
              type="circle"
              paint={{
                'circle-color': '#cddc39',

                'circle-radius': 6,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(230001, 2300000).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>


            <Layer
              // key={value.id}
              id="hellothere6"
              type="circle"
              paint={{
                'circle-color': '#ff6f00',

                'circle-radius': 7,

                'circle-stroke-opacity': 1,
              }}
            >

              {this.filterByMass(2300001, 23000000).map((value) => {
                return (
                  <Feature
                    key={value.id}
                    coordinates={[value.reclong, value.reclat]}
                    onMouseEnter={() => { this.markerClick(value); }}
                    onClick={() => {
                      this.markerClick(value);
                    }}
                    data-hi="hi"
                  />
                );
              })}

            </Layer>

            {/* {this.renderCraters} */}
            <div className="colorkey">
              <h3>Color Code</h3>

              <div className="mass">0-23 kg:<div className="color1" /></div>
              <div className="mass">23-230 kg:<div className="color2" /></div>
              <div className="mass">230-2300 kg:<div className="color3" /></div>
              <div className="mass">2300-23000 kg:<div className="color4" /></div>
              <div className="mass">23000-230000 kg:<div className="color5" /></div>
              <div className="mass">230000-2300000 kg:<div className="color6" /></div>
              <div className="mass">2300000-2300000 kg:<div className="color7" /></div>
            </div>
          </Map>
      );
    } else {
      return (
          // eslint-disable-next-line
          <Map style="mapbox://styles/mapbox/dark-v9"
            zoom={this.state.zoom}
            containerStyle={{
              height: '100vh',
              width: '100vw',
            }}
          />
      );
    }
  }
}

export default Astromap;
