import React, {Component} from 'react';
import Aside from '../../containers/Aside/Aside';
import ExperienceMain from '../../containers/Main/ExperienceMain';
import '../scss/Page.scss';


class Experience extends Component {
    render() {
        return(
            <div className="page">
                <Aside />
                <ExperienceMain />
            </div>
        );
    }
}

export default Experience;