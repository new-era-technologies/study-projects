import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

class Item extends Component {
    render() {
        const {
            props: {
                item: {
                    id,
                    title,
                    short_description,
                    social_image,
                    past_time
                }
            }
        } = this;
        return (
            <div className="Item">
                <Link to={'/Item' + id} className='Item__link'>
                    <h4 className="Item__link__title">{title}</h4>
                    <img src={social_image} alt={title} className="Item__link__pic"/>
                    <p className="Item__link__descr">{short_description}</p>
                    <p className="Item__link__date">{past_time}</p>
                </Link>
            </div>
        );
    }
}

export default Item;