import React, {Component} from 'react';
import Media from 'react-media';
import Header from '../../containers/Header/Header';
import Quote from '../../containers/Quote/Quote';
import Portfolio from '../../containers/Portfolio/Portfolio';
import Info from '../../containers/Info/Info';
import Footer from '../../containers/Footer/Footer';

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <Header/>
                <Quote/>
                <Portfolio/>
                <Info/>
                <Media query="(min-width: 967px)">
                    <Footer/>
                </Media>
            </div>
        );
    }
}

export default Resume;
