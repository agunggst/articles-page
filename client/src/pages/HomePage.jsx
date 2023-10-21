import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [navigate])

  return ( 
    <div className="home-page">Home</div>
  )
}
 
export default HomePage