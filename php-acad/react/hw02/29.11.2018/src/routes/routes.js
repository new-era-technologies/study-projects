import Homepage from '../pages/Homepage/Homepage';
import List from '../pages/List/List';
import Item from '../pages/Item/Item';

export default [
    {
        path: '/',
        exact: true,
        component: Homepage
    },
    {
        path: '/List',
        exact: false,
        component: List
    },
    {
        path: '/Item:id',
        exact: false,
        component: Item
    }
]