import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Item from '../../components/Item/Item';
import sdksList from '../../utils/configs/sdks';
import radioList from '../../utils/configs/radio';
import mag from '../../assets/img/mag.png';
import './App.css';


/**
 * Class representing an app.
 * @extends Component
 */
class App extends Component {

    /**
     * @description initial state for container App
     * @type {object}
     * @property {array} list - json array of objects with titles and tags
     * @property {string} step - for filter tags
     * @property {array} list - array of objects with title and tags from search field
     * @property {string} option - for choosing search field or filter by tags
     */
    state = {
        sdksList: sdksList.SDKs,
        activeStep: 'all',
        srchList: [],
        selectedOption: ''
    };

    /**
     * @function sort items
     * @description function for sort items by tag
     * @param {e} e - syntheticEvent
     */
    sortItems = (e) => {
        this.setState({
            activeStep: e.target.value,
            selectedOption: ''
        })
    };

    /**
     * @function search items
     * @description function for search items by title
     */
    srchItems = () => {
        const {
            state: {
                sdksList
            }
        } = this;
        const value = this.inp.value
                                    /**
                                     * @function the toLowerCase() method
                                     * @description converts a string to lowercase letters
                                     * @param {string} the value of the current element
                                     * @return {string} converted value
                                     */
                                    .toLowerCase();
        const newList = sdksList
                                /**
                                 * @function the filter() method
                                 * @description an array filled with all array elements that pass a test
                                 * @param {string} the value of array
                                 * @return {array} array of objects with filtered items
                                 */
                                .filter(
                                    item =>
                                        item.title
                                                /**
                                                 * @function the toLowerCase() method
                                                 * @description converts a string to lowercase letters
                                                 * @param {string} the value of the current element
                                                 * @return {string} converted value
                                                 */
                                                .toLowerCase()
                                                /**
                                                 * @function the includes() method
                                                 * @description determines whether an array contains a specified element
                                                 * @param {string} the value of array
                                                 * @return {boolean}
                                                 */
                                                .includes(value)
                                );
        this.setState({
            srchList: newList,
            activeStep: 'search'
        })
    };

    /**
     * @function changes radio button
     * @description function for focus in search field, when click on radio button or mark this button when click in search field
     */
    changeRadBtn = () => {
        ReactDOM
            /**
             * @function the findDomNode() method
             * @description navigate the node tree
             */
            .findDOMNode(this)
            /**
             * @function the querySelector() method
             * @description returns the first element that matches a specified CSS selector in the document
             * @param {string} the value
             * @return {object}
             */
            .querySelector('#searchText')
            /**
             * @function the focus() method
             * @description is used to give focus to an element
             */
            .focus();
        this.setState({
            selectedOption: 'search'
        })
    };

    render() {
        const {
            state:
                {
                    sdksList,
                    activeStep,
                    srchList
                }
        } = this;
        /**
         * @description filtered list with components Item
         * @returns {array} list of objects from search field or list of objects form filtering by tags
         */
        const filteredList = activeStep === 'search' ?
            srchList
            : (activeStep === 'all' ?
                sdksList
                : sdksList
                        /**
                         * @function the filter() method
                         * @description an array filled with all array elements that pass a test
                         * @param {object} the value of array
                         * @return {array} array of objects with filtered items
                         */
                        .filter(
                            item =>
                                item.tag
                                        /**
                                         * @function the some() method
                                         * @description checks if any of the elements in an array pass a test
                                         * @param {string} the value of item
                                         * @return {boolean} returns true if any of the elements in the array pass the test
                                         */
                                        .some(
                                            item =>
                                                item === activeStep
                                        )));
        /**
         * @description container App with filter form and list of components Item
         * @return {string} - HTML markup for the container
         */
        return (
            <div className="App">
                <div className="App__container">
                    <h1 className='App__title'>
                        SDKs
                    </h1>
                    <div className="App__container__box">
                        <div className="App__container__filter-box">
                            <form action="#">
                                <div className='App__container__filter-box__item'>
                                    <input
                                        id='radioSearch'
                                        className='App__container__filter-box__item__rad'
                                        type="radio"
                                        name='tag'
                                        checked={this.state.selectedOption === 'search'}
                                        onChange={this.changeRadBtn}
                                    />
                                    <div className='App__container__filter-box__item__srch-box'>
                                        <img
                                            className='App__container__filter-box__item__srch-box__img'
                                            src={mag}
                                            alt="mag"
                                        />
                                        <input
                                            id='searchText'
                                            className='App__container__filter-box__item__srch-box__srch'
                                            type="search"
                                            ref={inp => this.inp = inp}
                                            onChange={this.srchItems}
                                            onClick={this.changeRadBtn}
                                            placeholder='Search'
                                        />
                                    </div>
                                </div>
                                <label
                                    className='App__container__filter-box__item'
                                    htmlFor="all"
                                >
                                    <input
                                        id='all'
                                        className='App__container__filter-box__item__rad'
                                        type="radio"
                                        name='tag'
                                        defaultChecked
                                        onChange={this.sortItems}
                                        value='all'
                                    />
                                    All
                                </label>
                                {radioList
                                    /**
                                     * @function the map() method
                                     * @description a function to be run for each element in array
                                     * @param {string} the value of the current element
                                     * @param {number} the array index of the current element
                                     * @return {string} HTML markup
                                     */
                                    .map((item, i) => (
                                        <label
                                            className='App__container__filter-box__item'
                                            htmlFor={item}
                                            key={i}
                                        >
                                            <input
                                                id={item}
                                                className='App__container__filter-box__item__rad'
                                                type="radio"
                                                name='tag'
                                                onChange={this.sortItems}
                                                value={item}
                                            />
                                            {item}
                                        </label>
                                    ))}
                            </form>
                        </div>
                        <div className="App__container__display-box">
                            <ul className="App__container__display-box__list">
                                {filteredList
                                    /**
                                     * @function the sort() method
                                     * @description sorts the items of an array
                                     * @param {string} the value a
                                     * @param {string} the value b
                                     * @return {array} array of objects with sorted items
                                     */
                                    .sort((a, b) => a.title.localeCompare(b.title))
                                    /**
                                     * @function the map() method
                                     * @description a function to be run for each element in array
                                     * @param {string} the value of the current element
                                     * @param {number} the array index of the current element
                                     * @return {string} HTML markup
                                     */
                                    .map((item, index) => (
                                        <li
                                            className="App__container__display-box__list__item"
                                            key={index}
                                        >
                                            <Item item={item}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;