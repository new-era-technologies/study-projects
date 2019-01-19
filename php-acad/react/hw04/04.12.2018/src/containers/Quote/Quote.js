import React, {Component} from 'react';
import shadow from '../../assets/img/quote/shadow.png';
import pencil from '../../assets/img/quote/pencil.png';
import scale from '../../assets/img/quote/scale.png';
import './Quote.scss';


class Quote extends Component {
    render() {
        return (
            <div className='Quote'>
                <div className="container">
                    <div className="Quote__container">
                        <div className='Quote__container__text-box'>
                            <p className='Quote__container__text-box__title'>
                                “
                            </p>
                            <p className='Quote__container__text-box__text'>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                        <div className='Quote__container__img-box'>
                            <img src={shadow} alt="shadow"
                                 className='Quote__container__img-box__img Quote__container__img-box__img--shadow'/>
                            <img src={pencil} alt="pencil"
                                 className='Quote__container__img-box__img Quote__container__img-box__img--first'/>
                            <img src={scale} alt="scale"
                                 className='Quote__container__img-box__img Quote__container__img-box__img--second'/>
                        </div>
                    </div>
                </div>
                <hr className='Quote__line'/>
            </div>
        )
    }
}

export default Quote;