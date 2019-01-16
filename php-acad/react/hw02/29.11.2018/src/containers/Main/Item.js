import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fetchApiItem from '../../api/apiItem';
import spinner from '../../assets/images/spinner.gif';
import './Item.css';

class ItemMain extends Component {
    state = {
        listItem: {}
    };
    componentDidMount() {
        const url = window.location.href.split('/');
        const id = url[3].substr(4);
        fetchApiItem(id)
            .then(response => {
                this.setState({
                    listItem: response
                });
            })
    }
    render() {
        const {state: {listItem}} = this;
        if (listItem.id) {
            return (
                <div className='ItemMain'>
                    <div>
                        <h4 className="ItemMain__title">{listItem.title}</h4>
                        <img src={listItem.social_image} alt={listItem.title} className="ItemMain__pic"/>
                        <p className="ItemMain__descr">{listItem.full_description}</p>
                        <p className="ItemMain__date">{listItem.past_time}</p>
                    </div>
                    <div className='Links'>
                        <Link to={'/List'}>List Items</Link>
                    </div>
                    <div className='Links'>
                        <Link to={'/'}>Home Page</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Spinner">
                    <img src={spinner} alt="spinner"/>
                </div>
            )
        }
    }
}

export default ItemMain;