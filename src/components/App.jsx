import React, { Component } from 'react';
import Concert from './Concert.jsx';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: [],
    }
    this.handleZip = this.handleZip.bind(this);
  }
  handleZip(e) {
    e.preventDefault();
    let zip = e.target.value;
    if (zip) {
      fetch(`http://concert-king-api.herokuapp.com/services/ticketmaster/shows/${zip}`)
      .then((response) => {
        response.json().then(concerts => this.setState({
          show: concerts._embedded.events,
          // name: Object.values(concerts._embedded.events[0].images[0]),
          // image: concerts._embedded.events[0].images[0],
          // url: concerts._embedded.events[0].url,
          // info: concerts._embedded.events[0].info,
          // date: concerts._embedded.events[0].classifications[0].name,
        }))
      });
    }
  }
  render() {
    return (
      <div className="search-container">
        <h1 className="site-title">Concert King</h1>
        <div className="zipcode-search-bar">
          <input onBlur={this.handleZip} type="text" placeholder="Enter your zip code" />
        </div>
        <div className="zipcode-search-btn">
          <button className="zip-btn" onBlur={this.handleZip}>Search</button>
        </div>
        <div>
          {
            this.state.show.map((concert) => {
              return (
                <div>
                  <Concert
                    concertData={concert}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
