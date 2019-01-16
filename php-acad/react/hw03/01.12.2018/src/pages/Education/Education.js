import React, {Component} from 'react';
import Aside from '../../containers/Aside/Aside';
import EducationMain from '../../containers/Main/EducationMain';
import '../scss/Page.scss';


class Education extends Component {
    render() {
        return(
            <div className="page">
                <Aside />
                <EducationMain />
            </div>
        );
    }
}

export default Education;