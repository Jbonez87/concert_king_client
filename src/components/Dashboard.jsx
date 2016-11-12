import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.handleZip = this.handleZip.bind(this);
  }
  handleZip(e) {
    e.preventDefault();
    const zip = e.target.value;
    if (zip) {
      fetch(`http://localhost:3000/services/ticketmaster/shows/${zip}`)
      .then((response) => {
        response.json().then(data => this.setState({
          shows: data._embedded.events,
        }));
      });
    }
  }
  render() {
    return (
      <div>
        <div className="zipcode-search-bar">
          <input className="zip-bar" onBlur={this.handleZip} type="text" placeholder="Enter your zip code" />
        </div>
        <div className="zipcode-search-btn">
          <button className="zip-btn" onBlur={this.handleZip}>Search</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
