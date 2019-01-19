import React, {Component} from 'react';
import Media from 'react-media';
import Menu from '../../containers/Menu/Menu';
import './Header.scss';


class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className="container">
                    <div className="Header__container">
                        <div className="Header__container__title-box">
                            <h1 className='Header__container__title-box__title'>webfolio</h1>
                            <p className='Header__container__title-box__text'>My Web Design Portfolio</p>
                        </div>
                        <Menu/>
                    </div>
                </div>
                <Media query="(max-width: 966px)">
                    <hr className='Header__line'/>
                </Media>
            </div>
        )
    }
}

export default Header;