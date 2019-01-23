import React, {Component} from 'react';
import Header from '../../containers/Header/Header';
import MainList from '../../containers/MainList/MainList';


class ListPage extends Component {
    render() {
        return (
            <div className="ListPage">
                <Header/>
                <MainList/>
            </div>
        );
    }
}

export default ListPage;