import React, { Component } from 'react';
import HomeMain from '../../containers/Main/Home';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
        <div className="Homepage">
            <h4>Home Page</h4>
            <HomeMain/>
        </div>
    );
  }
}

export default Homepage;