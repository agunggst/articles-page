import { useEffect } from "react"
import "./styles/ContactPage.css"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ContactPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [])

  return (
    <div className="contact-page">
      c here
    </div>
  )
}
 
export default ContactPage