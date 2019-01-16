import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.scss';


class HomeMain extends Component {
    render() {
        return(
            <div className="main">
                <h2>Vladymyr Radionov</h2>
                <p><b>Adress:</b>Kiev, Ukraine</p>
                <p><b>Phone:</b>+380634732823</p>
                <p><b>E-mail:</b>radionovdon@gmail.com</p>
                <p><b>Gitlab:</b>http://gitlab.php-academy.org/radionovdon</p>
                <div className="form_link">
                    <Link to={'/Form'}>
                        Contact Me
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeMain;