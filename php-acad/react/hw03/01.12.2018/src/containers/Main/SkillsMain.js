import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.scss';


class SkillsMain extends Component {
    render() {
        return(
            <div className="main">
                <h2>Skills</h2>
                <p>communication skills</p>
                <p>analytical</p>
                <p>creative thinking</p>
                <p>business intelligence</p>
                <p>leadership</p>
                <p>conflict resolution</p>
                <p>team building</p>
                <p>teamwork</p>
                <div className="form_link">
                    <Link to={'/Form'}>
                        Contact Me
                    </Link>
                </div>
            </div>
        );
    }
}

export default SkillsMain;