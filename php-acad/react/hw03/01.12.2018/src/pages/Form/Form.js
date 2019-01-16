import React, {Component} from 'react';
import FormMain from '../../containers/Main/FormMain';
import '../scss/Page.scss';


class Form extends Component {
    render() {
        return (
            <div className="form">
                <FormMain />
            </div>
        );
    }
}

export default Form;