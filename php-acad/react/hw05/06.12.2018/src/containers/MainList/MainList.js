import React, {Component} from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';
import './MainList.scss';


class MainList extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        axios.all([
            axios.get('https://api.nasa.gov/planetary/apod?date=2019-01-23&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-12-22&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-11-21&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-10-20&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-09-19&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-08-18&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-07-17&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-06-16&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-05-15&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-04-14&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-03-13&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-02-12&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2018-01-11&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-12-10&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-11-09&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-10-08&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-09-07&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-08-06&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-07-05&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-06-04&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-05-03&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-04-02&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-03-01&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-02-28&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO'),
            axios.get('https://api.nasa.gov/planetary/apod?date=2017-01-30&api_key=Bc405bXxIuemKvXf9Elp2BNGSs77ZulARRh2nGFO')
        ])
            .then(axios.spread((res1, res2, res3, res4, res5,
                                res6, res7, res8, res9, res10,
                                res11, res12, res13, res14, res15,
                                res16, res17, res18, res19, res20,
                                res21, res22, res23, res24, res25,) => {
                this.setState({
                    list: [
                        res1.data, res2.data, res3.data, res4.data, res5.data,
                        res6.data, res7.data, res8.data, res9.data, res10.data,
                        res11.data, res12.data, res13.data, res14.data, res15.data,
                        res16.data, res17.data, res18.data, res19.data, res20.data,
                        res21.data, res22.data, res23.data, res24.data, res25.data
                    ]
                });
            }))
    }

    render() {
        const {state: {list}} = this;
        console.log(list)
        if (list.length) {
            return (
                <div className='MainList'>
                    <div className="container">
                        <h4 className='MainList__title'>
                            Astronomy Picture of the Day
                        </h4>
                        <div className='MainList__container'>
                            {list.map((item, i) =>
                                <Item item={item} key={i}/>
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='Spinner'>
                    <div className='Spinner__blob-1'></div>
                    <div className='Spinner__blob-2'></div>
                </div>
            )
        }
    }
}

export default MainList;