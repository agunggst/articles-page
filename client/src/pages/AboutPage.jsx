import { useEffect } from "react"
import "./styles/AboutPage.css"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const AboutPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [])

  return (
    <div className="about-page">
      about here
    </div>
  )
}
 
export default AboutPage