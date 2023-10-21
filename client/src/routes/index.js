import { renderRoutes } from "./generate-routes"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"
import BlankLayout from "../layouts/BlankLayout"

// Pages
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PostPage from "../pages/PostPage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import EditProfilePage from "../pages/EditProfilePage"

export const routes = [
  {
    layout: DefaultLayout,
    routes: [
      {
        name: 'Home',
        title: 'Articles App',
        component: HomePage ,
        path: '/',
      },
      {
        name: 'Post',
        title: 'Articles App',
        component: PostPage ,
        path: '/posts',
      },
      {
        name: 'About',
        title: 'Articles App',
        component: AboutPage ,
        path: '/about',
      },
      {
        name: 'Contact',
        title: 'Articles App',
        component: ContactPage ,
        path: '/contact',
      },
      {
        name: 'Profile',
        title: 'Articles App',
        component: EditProfilePage ,
        path: '/edit-profile',
      }
    ]
  },
  {
    layout: BlankLayout,
    routes: [
      {
        name: 'Login',
        title: 'Articles App - Login',
        component: LoginPage ,
        path: '/login',
      },
      {
        name: 'Register',
        title: 'Articles App - Register',
        component: LoginPage ,
        path: '/register',
      }
    ]
  }
]

export const Routes = renderRoutes(routes)