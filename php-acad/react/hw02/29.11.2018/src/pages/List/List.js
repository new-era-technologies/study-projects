import React, {Component} from 'react';
import ListMain from '../../containers/Main/List';
import './List.css';

class List extends Component {
    render() {
        return(
            <div className='List'>
                <h4>List Items</h4>
                <ListMain />
            </div>
        );
    }
}

export default List;