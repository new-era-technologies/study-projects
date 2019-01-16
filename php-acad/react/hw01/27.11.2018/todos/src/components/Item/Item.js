import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        const {
            props: {
                item: {id, text},
                deleteItem
            }
        } = this;
        return (
            <div>
                <div className='Item'>
                    <button className='Item__btn' onClick={() => deleteItem(id)}>remove</button>
                    <p className='Item__text'>{text}</p>
                </div>
            </div>
        )
    }
}

export default Item;