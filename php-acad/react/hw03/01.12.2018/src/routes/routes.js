import Home from '../pages/Home/Home';
import Experience from '../pages/Experience/Experience';
import Education from '../pages/Education/Education';
import Skills from '../pages/Skills/Skills';
import Form from '../pages/Form/Form';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/Experience',
        exact: false,
        component: Experience
    },
    {
        path: '/Education',
        exact: false,
        component: Education
    },
    {
        path: '/Skills',
        exact: false,
        component: Skills
    },
    {
        path: '/Form',
        exact: false,
        component: Form
    }
]