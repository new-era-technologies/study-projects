import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Item.scss';


class Item extends Component {
    render() {
        const {
            props: {
                item: {
                    date,
                    url,
                    title
                }
            }
        } = this;
        return (
            <div className="Item">
                <figure className='Item__fig'>
                    <img src={url} alt={title} className="Item__fig__img"/>
                    <figcaption className='Item__fig__cap'>
                        <Link to={`/list/${date}`} key={title} className='Item__fig__cap__link'>
                            {title}
                        </Link>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default Item;