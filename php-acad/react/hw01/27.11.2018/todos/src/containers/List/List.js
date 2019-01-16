import React, {Component} from 'react';
import Item from '../../components/Item/Item';
import './List.css';

class List extends Component {
    state = {
        list: [
            {
                id: 1,
                text: 'Make dinner tonight!'
            },
            {
                id: 2,
                text: 'Fold the laundry.'
            },
            {
                id: 3,
                text: 'Learn to make a React app!'
            }
        ]
    };
    createNewItem = () => {
        const {list} = this.state;
        const newList = [...list];
        let newItem = {id: newList[newList.length - 1] ? newList[newList.length - 1].id + 1 : 1, text: this.inp.value};
        newList.push(newItem);
        this.setState({list: newList});
        this.inp.value = '';
    };
    deleteItem = id => {
        const {list} = this.state;
        let newList = list.filter(item => item.id !== id && item);
        this.setState({list: newList});
    };
    render() {
        const {state: {list}, deleteItem} = this;
        return (
            <div>
                <div className='Container'>
                    <h4>React Todos</h4>
                    <input className='List__inp' ref={inp => {this.inp = inp}} type="text"/>
                    <button className='List__btn' onClick={() => this.createNewItem()}>Save</button>
                    {list.map(item => <Item deleteItem={deleteItem} item={item} key={item.id}/>)}
                </div>
            </div>
        )
    }
}

export default List;