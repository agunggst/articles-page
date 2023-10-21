import { Routes } from './routes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Article App'
    const checkToken = localStorage.getItem('isLoggedIn')
    if (checkToken) {
      dispatch({
        type: 'INIT_USER_INFO'
      })
    }
  }, [dispatch])
  return (
    <div className="App">
      <div className="container">
        <Routes/>
      </div>
    </div>
  )
}

export default App
