import React, {Component} from 'react';
import ItemMain from '../../containers/Main/Item';
import './Item.css';

class Item extends Component {
    render() {
        return(
            <div className='ItemWrapper'>
                <h4>Item</h4>
                <ItemMain />
            </div>
        );
    }
}

export default Item;