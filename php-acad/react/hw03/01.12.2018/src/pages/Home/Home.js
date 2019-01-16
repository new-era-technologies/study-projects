import React, {Component} from 'react';
import Aside from '../../containers/Aside/Aside';
import HomeMain from '../../containers/Main/HomeMain';
import '../scss/Page.scss';


class Home extends Component {
  render() {
    return (
      <div className="page">
        <Aside />
        <HomeMain />
      </div>
    );
  }
}

export default Home;