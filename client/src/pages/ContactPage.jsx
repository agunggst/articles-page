import { useEffect, useState } from "react"
import "./styles/ContactPage.css"
import { useNavigate } from "react-router-dom"

const ContactPage = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setUserInfo(userInfo)
  }, [])

  return (
    <div className="contact-page">
      Contact me: <span className="phone">{userInfo.phone}</span>
    </div>
  )
}
 
export default ContactPage