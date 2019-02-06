import React from 'react';
import {shallow} from 'enzyme';
import Item from './Item';


describe('Item Container', () => {

    const props = {
        item: {
            title: 'SDK',
            tag: [
                'Tag1',
                'Tag2'
            ]
        }
    };

    const ItemContainer = shallow(<Item {...props} />);

    it('renders properly', () => {
        expect(ItemContainer).toMatchSnapshot()
    });

    describe('Correct render for first SDK Item', () => {

        it('title', () => {
            expect(
                ItemContainer
                    .find('p')
                    .text()
            ).toEqual('SDK')
        });

        it('tag', () => {
            expect(
                ItemContainer
                    .find('span')
                    .first()
                    .text()
            ).toEqual('Tag1')
        })
    })

});