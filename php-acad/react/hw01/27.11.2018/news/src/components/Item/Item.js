import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        const {
            props: {
                item: {
                    url,
                    urlToImage,
                    title,
                    description,
                    publishedAt,
                    author
                }
            }
        } = this;
        return (
            <div className="Item">
                <a href={url} className="Item__link" target='_blank' rel="noopener noreferrer">
                    <img src={urlToImage} alt={title} className="Item__link__pic"/>
                    <h4 className="Item__link__title">{title}</h4>
                    <p className="Item__link__descr">{description}</p>
                    <p className="Item__link__sign">
                        <span className="Item__link__sign__date">{publishedAt}</span>
                        <span className="Item__link__sign__author">{author}</span>
                    </p>
                </a>
            </div>
        );
    }
}

export default Item;