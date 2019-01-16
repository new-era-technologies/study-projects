import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fetchApi from '../../api/api';
import spinner from '../../assets/images/spinner.gif';
import Item from '../../components/Item/Item';
import './List.css';

class ListMain extends Component {
    state = {
        list: []
    };
    componentDidMount() {
        fetchApi()
            .then(response => {
                this.setState({
                    list: response.results
                });
            })
    }
    render() {
        const {state: {list}} = this;
        if (list.length) {
            return (
                <div>
                    <div className='Wrapper'>
                        {list.map((item, index) => (
                            <Item item={item} key={index} />
                        ))}
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

export default ListMain;