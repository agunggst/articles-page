import "./styles/LoginPage.css"
import Logo from "../assets/foxhub.png"
import GeneralInput from "../components/GeneralInput"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import GeneralButton from "../components/GeneralButton"
import axios from "axios"
import { useDispatch } from "react-redux"

const LoginPage = () => {
  const [pageState, setPageState] = useState('LoginPage')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) navigate('/')
  }, [navigate])

  useEffect(() => {
    if (location.pathname === '/login') {
      setPageState('LoginPage')
    } else {
      setPageState('RegisterPage')
    }
  }, [location.pathname])

  const login = async (e) => {
    e.preventDefault()
    try {
      const config = {
        method: 'GET',
        url: `http://localhost:3000/users?username=${username}`
      }
      const { data } = await axios(config)
      if (!data.length) {
        setError('User not found')
      } else {
        const user = data[0]
        if (user.password !== password) {
          setError('Invalid password')
        } else {
          dispatch({
            type: 'LOGIN',
            payload: {
              userInfo: user
            }
          })
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const register = async (e) => {
    e.preventDefault()
    try {
      if (!username || !password) {
        setError('Please input your username and password.')
        return
      }
      const config = {
        method: 'POST',
        url: `http://localhost:3000/users`,
        data: {
          username,
          password,
          name: username,
          avatar: 'https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg',
          educationId: 1
        }
      }
      const { data } = await axios(config)
      dispatch({
        type: 'LOGIN',
        payload: {
          userInfo: data
        }
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <div className="login-page">
      <img src={Logo} alt="article" className="logo" />
      <h4 className="title">{pageState === 'LoginPage' ? `Sign in to Article App` : `Create Article App Account`}</h4>
      {error && <div className="error-message">{error}</div>}
      <form className="login-form" onSubmit={e => pageState === 'LoginPage' ? login(e) : register(e)}>
        <GeneralInput inputValue={username} onInputChange={setUsername} label="Username" props={{ type: 'text', name: 'username', id: 'username' }} />
        <GeneralInput inputValue={password} onInputChange={setPassword} label="Password" props={{ type: 'password', name: 'password', id: 'password' }} />
        <GeneralButton label={pageState === 'LoginPage' ? 'Sign In' : 'Register'} onButtonClick={e => pageState === 'LoginPage' ? login(e) : register(e)} />
      </form>
      <div className="login-callout">
        {pageState === 'LoginPage' && <>New to Article App? <Link to="/register" className="link">Create an account</Link></>}
        {pageState === 'RegisterPage' && <>Already Have Account? <Link to="/login" className="link">Sign In</Link></>}
      </div>
    </div>
  )
}

export default LoginPage