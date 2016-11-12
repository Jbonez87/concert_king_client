import React, { Component } from 'react';

const Concert = ({ concertData }) => {
  const name = concertData.name;
  const url = concertData.url;
  // let img = concertData.images[0];
    return (
      <div>
        <h1>{name}</h1>
        <a href={url} className="ticket-link" target="_blank" rel="noopener noreferrer">For tickets click here</a><br />
        {/* <img src={img} alt="band main" title="band main" /> */}
      </div>
    );

};

export default Concert;
