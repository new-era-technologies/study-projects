import React, {Component} from 'react';
import axios from 'axios';
import './MainItem.scss';


class MainItem extends Component {
    state = {
        listItem: {}
    };

    componentDidMount() {
        const url = window.location.href.split('/');
        const id = url[4];
        axios.get('https://api.nasa.gov/planetary/apod?date=' + id + '&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO')
            .then(response => {
                this.setState({
                    listItem: response.data
                });
            })
    }

    render() {
        const {state: {listItem}} = this;
        if (listItem.title) {
            return (
                <div className='MainItem'>
                    <div className="container">
                        <div className="MainItem__container">
                            <h4 className='MainItem__container__title'>
                                {listItem.title}
                            </h4>
                            <div className='MainItem__container__box'>
                                <a href={listItem.hdurl} className="MainItem__container__box__link" target='_blank'
                                   rel="noopener noreferrer">
                                    <img className='MainItem__container__box__link__img' src={listItem.hdurl}
                                         alt={listItem.title}/>
                                </a>
                                <p className='MainItem__container__box__exp'>
                                    {listItem.explanation}
                                </p>
                                <p className='MainItem__container__box__cop'>
                                    {listItem.copyright}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='Spinner'>
                    <div className='Spinner__blob-1'></div>
                    <div className='Spinner__blob-2'></div>
                </div>
            )
        }
    }
}

export default MainItem;