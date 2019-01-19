import Home from '../pages/Home/Home';
import About_me from '../pages/About-me/About-me';
import Works from '../pages/Works/Works';
import Resume from '../pages/Resume/Resume';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/About-me',
        exact: false,
        component: About_me
    },
    {
        path: '/Works',
        exact: false,
        component: Works
    },
    {
        path: '/Resume',
        exact: false,
        component: Resume
    }
]