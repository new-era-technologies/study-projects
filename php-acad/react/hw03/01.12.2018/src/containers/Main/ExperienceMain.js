import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.scss';


class ExperienceMain extends Component {
    render() {
        return(
            <div className="main">
                <h2>Experience</h2>
                <p>Video-replay-maker on football channel, 6+ of work experience. Friendly, self-demanding, ready to develop constantly and interesting to discover the world.</p>
                <p><b>2012 – present</b>video-replay-maker, football-channel ‘TRC ‘Football’</p>
                <div className="form_link">
                    <Link to={'/Form'}>
                        Contact Me
                    </Link>
                </div>
            </div>
        );
    }
}

export default ExperienceMain;