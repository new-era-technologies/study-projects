import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.scss';


class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul className="Menu__list">
                    <li className="Menu__list__item">
                        <NavLink
                            exact
                            to={'/'}
                            className='Menu__list__item__link'
                            activeClassName='active'
                        >
                            home
                        </NavLink>
                    </li>
                    <li className="Menu__list__item">
                        <NavLink
                            to={'/list'}
                            className='Menu__list__item__link'
                            activeClassName='active'
                        >
                            APOD list
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;