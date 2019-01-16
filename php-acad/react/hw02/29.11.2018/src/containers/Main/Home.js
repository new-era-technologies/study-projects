import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class HomeMain extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to={'/List'}>List Items</Link>
                </div>
            </div>
        );
    }
}

export default HomeMain;