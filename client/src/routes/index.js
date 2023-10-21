import { renderRoutes } from "./generate-routes"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"
import BlankLayout from "../layouts/BlankLayout"

// Pages
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

export const routes = [
  {
    layout: DefaultLayout,
    routes: [
      {
        name: 'Home',
        title: 'Articles App',
        component: HomePage ,
        path: '/',
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
        component: RegisterPage ,
        path: '/register',
      }
    ]
  }
]

export const Routes = renderRoutes(routes)