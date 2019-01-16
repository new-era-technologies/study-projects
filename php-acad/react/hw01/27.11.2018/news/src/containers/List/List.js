import React, { Component } from 'react';
import spinner from '../../assets/spinner.gif';
import './List.css';
import Item from '../../components/Item/Item';
import fetchApi from '../../api/Api';

class List extends Component {
    state = {
        list: []
    };
    componentDidMount() {
        fetchApi()
            .then(response => {
                this.setState({
                    list: response.articles
                });
            })
    }
    render() {
        const {state: {list}} = this;
        if (list.length) {
            return (
                <div className="List">
                    <div className="Wrapper">
                        {list.map((item, index) => (
                            <Item item={item} key={index}/>
                        ))}
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

export default List;