import Login from "../pages/login/components/Login";
import Home from "../pages/home/view/Home";
import Register from "../pages/register/view/Register";
import Blog from "../pages/blog/view/Blog";



export default [
    {
        path:'/home',
        component: Home
        
    },
    {
        path:'/',
        component: Login,
        exact:true
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/blog',
        component: Blog
    }
]