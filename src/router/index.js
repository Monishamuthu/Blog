import Login from "../pages/login/components/Login";
import Register from "../pages/register/view/Register";
import Blog from "../pages/blog/view/Blog";
import Sample from '../Sample'
export default [
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/sample",
    component: Sample
  }
];
