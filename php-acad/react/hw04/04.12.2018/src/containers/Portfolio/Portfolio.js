import React, {Component} from 'react';
import imgBox from '../../utils/configs/portfolio/portfolio';
import './Portfolio.scss';


class Portfolio extends Component {
    render() {
        return (
            <div className='Portfolio'>
                <div className="container">
                    <div className="Portfolio__container">
                        <h2 className='Portfolio__container__title'>
                            Portfolio
                        </h2>
                        <ul className='Portfolio__container__list'>
                            {imgBox.map((item, index) => (
                                <li className='Portfolio__container__list__item' key={index}>
                                    <a className='Portfolio__container__list__item__link' href="#">
                                        <img className='Portfolio__container__list__item__link__img' src={item}
                                             alt='work'/>
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;