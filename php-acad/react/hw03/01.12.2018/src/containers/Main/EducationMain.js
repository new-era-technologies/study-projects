import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.scss';


class EducationMain extends Component {
    render() {
        return(
            <div className="main">
                <h2>Education</h2>
                <p><b>2001 – 2007</b>Donetsk Railway Institute, automation and computer control systems on transport</p>
                <p><b>2018 – present</b>Php-Academy.Kiev, full stack developer</p>
                <div className="form_link">
                    <Link to={'/Form'}>
                        Contact Me
                    </Link>
                </div>
            </div>
        );
    }
}

export default EducationMain;