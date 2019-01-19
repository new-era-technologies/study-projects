import React, {Component} from 'react';
import Media from 'react-media';
import person from '../../assets/img/info/person.png';
import location from '../../assets/img/info/location.png';
import {soc_links} from '../../utils/configs/soc-links/soc_links';
import {skillsInfo} from '../../utils/configs/skills/skills';
import './Info.scss';


class Info extends Component {
    render() {
        return (
            <div className='Info'>
                <div className="container">
                    <div className="Info__container">
                        <div className="Info__container__bio">
                            <div className="Info__container__bio__person">
                                <div className="Info__container__bio__person__img-box">
                                    <img className='Info__container__bio__person__img-box__img' src={person}
                                         alt="person"/>
                                </div>
                                <div className="Info__container__bio__person__title-box">
                                    <h5 className='Info__container__bio__person__title-box__name'>
                                        Lorem Ipsum
                                    </h5>
                                    <div className="Info__container__bio__person__title-box__geo-box">
                                        <img className='Info__container__bio__person__title-box__geo-box__img'
                                             src={location} alt="geo"/>
                                        <p className='Info__container__bio__person__title-box__geo-box__text'>
                                            Kerala, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className='Info__container__bio__text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="Info__container__soc-links">
                            {soc_links.map((item, index) => (
                                <a className='Info__container__soc-links__link' href="#" key={index}>
                                    <img className="Info__container__soc-links__link__img"
                                         src={item.img} alt="soc_link"/>
                                    <Media query="(max-width: 966px)">
                                    <span className='Info__container__soc-links__link__text'>
                                        {item.title}
                                    </span>
                                    </Media>
                                </a>
                            ))
                            }
                        </div>
                        <div className="Info__container__skills">
                            <h5 className='Info__container__skills__title'>
                                My Skills
                            </h5>
                            <ul className='Info__container__skills__list'>
                                {skillsInfo.map((item, index) => (
                                    <li className='Info__container__skills__list__item' key={index}>
                                        <span className='Info__container__skills__list__item__title'>{item.title}</span>
                                        <img className='Info__container__skills__list__item__img' src={item.img}
                                             alt="graph"/>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Media query="(max-width: 966px)">
                    <hr className='Info__line'/>
                </Media>
            </div>
        )
    }
}

export default Info;