import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import sdksList from '../../utils/configs/sdks';


describe('App Container', () => {

    const initialState = {
        sdksList: sdksList.SDKs,
        activeStep: 'all',
        srchList: [],
        selectedOption: ''
    };

    const AppContainer = shallow(<App {...initialState} />);
    const AppContainerMount = mount(<App {...initialState}/>);

    it('renders properly', () => {
        expect(AppContainer).toMatchSnapshot()
    });

    it('initialize App with initial state', () => {
        AppContainer.setState(initialState);
        expect(
            AppContainer
                .state()
        ).toEqual(initialState);
    });

    describe('App Container renders Item list', () => {

        it('App renders Item list', () => {
            expect(
                AppContainer
                    .find('Item')
            ).toHaveLength(9)
        });

    });

    describe('Form handlers', () => {

        describe('Choosing radio buttons with filter Tags', () => {

            const val = 'Tag2';
            const option = '';

            beforeEach(() => {
                AppContainer
                    .find('[id="Tag2"]')
                    .simulate('change', {
                        target: {
                            value: val
                        },
                        selectedOption: option
                    })
            });

            it('updates when radio button changes', () => {
                expect(
                    AppContainer
                        .state().activeStep
                ).toEqual(val);
                expect(
                    AppContainer
                        .state().selectedOption
                ).toEqual(option);
            })

        });

        describe('Choosing radio button with search form', () => {

            const option = 'search';

            beforeEach(() => {
                AppContainerMount
                    .find('[id="radioSearch"]')
                    .simulate('change', {
                        selectedOption: option
                    })
            });

            it('updates when radio button changes', () => {
                expect(
                    AppContainerMount
                        .state().selectedOption
                ).toEqual(option);
            })

        });

        describe('Choosing input field with search form', () => {

            const val = 'SDK 1';
            const newList = [
                {
                    title: val,
                    tag: [
                        'Tag1',
                        'Tag3'
                    ]
                }
            ];
            const option = 'search';

            beforeEach(() => {
                AppContainerMount
                    .find('[id="searchText"]')
                    .simulate('click', {
                        selectedOption: option
                    });
                AppContainerMount
                    .find('[id="searchText"]')
                    .instance().value = val;
                AppContainerMount
                    .find('[id="searchText"]')
                    .simulate('change', {
                        srchList: [...newList]
                    });
            });

            it('updates selectedOption in state when type in search form', () => {
                expect(
                    AppContainerMount
                        .state().selectedOption
                ).toEqual(option)
            });

            it('updates list in state when type in search form', () => {
                expect(
                    AppContainerMount
                        .state().srchList
                ).toEqual(newList)
            })

        });

        afterAll(() => {
            AppContainer.setState(initialState)
        });

    });

    it('check state', () => {
        console.log(AppContainer.state())
    })

});