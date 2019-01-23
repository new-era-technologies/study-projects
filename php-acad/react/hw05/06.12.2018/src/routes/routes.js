import Home from '../pages/Home/Home';
import ListPage from '../pages/ListPage/ListPage';
import ItemPage from '../pages/ItemPage/ItemPage';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/list',
        exact: true,
        component: ListPage
    },
    {
        path: '/list/:id',
        exact: false,
        component: ItemPage
    }
]