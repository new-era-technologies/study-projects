import React, {Component} from 'react';
import Aside from '../../containers/Aside/Aside';
import SkillsMain from '../../containers/Main/SkillsMain';
import '../scss/Page.scss';


class Skills extends Component {
    render() {
        return(
            <div className="page">
                <Aside />
                <SkillsMain />
            </div>
        );
    }
}

export default Skills;