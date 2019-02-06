import React, {Component} from 'react';
import './Item.css';


/**
 * Class representing an item.
 * @extends Component
 */
class Item extends Component {
    render() {
        /**
         * @memberof containers.App
         * @prop {Object} the props that are passed to this component
         * @prop {string} title - the name of my component
         * @prop {array} tag - the array of tags of my component
         * @prop {string} tag - the names of tags in array
         */
        const {
            props: {
                item: {
                    title,
                    tag
                }
            }
        } = this;
        /**
         * @description Component Item with title and list of tags
         * @return {string} - HTML markup for the component
         */
        return (
            <div className='Item'>
                <p className='Item__title'>{title}</p>
                {
                    /**
                     * @function the map() method
                     * @description a function to be run for each element in array
                     * @param {string} the value of the current element
                     * @param {number} the array index of the current element
                     * @return {string} HTML markup
                     */
                    tag.map((item, i) => (
                    <span className='Item__tag' key={i}>{item}</span>
                ))}
            </div>
        )
    }
}

export default Item;