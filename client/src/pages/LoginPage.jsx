import "./styles/LoginPage.css"
import Logo from "../assets/foxhub.png"
import GeneralInput from "../components/GeneralInput"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import GeneralButton from "../components/GeneralButton"

const LoginPage = () => {
  const [pageState, setPageState] = useState('LoginPage')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/login') {
      setPageState('LoginPage')
    } else {
      setPageState('RegisterPage')
    }
  }, [location.pathname])

  const login = () => {
    console.log('login');
  }

  const register = () => {
    console.log('regis');
  }

  return ( 
    <div className="login-page">
      <img src={Logo} alt="article" className="logo" />
      <h4 className="title">{pageState === 'LoginPage' ? `Sign in to Article App` : `Create Article App Account`}</h4>
      {error && <div className="error-message">{error}</div>}
      <div className="login-form">
        <GeneralInput inputValue={username} onInputChange={setUsername} label="Username" props={{ type: 'text', name: 'username', id: 'username' }} />
        <GeneralInput inputValue={password} onInputChange={setPassword} label="Password" props={{ type: 'password', name: 'password', id: 'password' }} />
        <GeneralButton label={pageState === 'LoginPage' ? 'Sign In' : 'Register'} onButtonClick={pageState === 'LoginPage' ? login : register} />
      </div>
      <div className="login-callout">
        {pageState === 'LoginPage' && <>New to Article App? <Link to="/register" className="link">Create an account</Link></>}
        {pageState === 'RegisterPage' && <>Already Have Account? <Link to="/login" className="link">Sign In</Link></>}
      </div>
    </div>
  )
}

export default LoginPage