import React, {Component} from 'react';
import Header from '../../containers/Header/Header';
import MainHome from '../../containers/MainHome/MainHome';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <MainHome/>
            </div>
        );
    }
}

export default Home;