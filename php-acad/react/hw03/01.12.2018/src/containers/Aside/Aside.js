import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import face from '../../assets/images/img1.jpg';
import './Aside.scss';


class Aside extends Component {
    render() {
        return(
            <div className='aside'>
                <ul className='aside__list'>
                    <li className='aside__list__item'>
                        <img
                            src={face}
                            alt="img"
                            className='aside__list__item__img'
                        />
                    </li>
                    <li className='aside__list__item'>
                        <NavLink
                            exact
                            to={'/'}
                            className='aside__list__item__link'
                            activeClassName={'active'}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='aside__list__item'>
                        <NavLink
                            to={'/Experience'}
                            className='aside__list__item__link'
                            activeClassName={'active'}
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li className='aside__list__item'>
                        <NavLink
                            to={'/Education'}
                            className='aside__list__item__link'
                            activeClassName={'active'}
                        >
                            Education
                        </NavLink>
                    </li>
                    <li className='aside__list__item'>
                        <NavLink
                            to={'/Skills'}
                            className='aside__list__item__link'
                            activeClassName={'active'}
                        >
                            Skills
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Aside;