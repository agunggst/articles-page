import { useEffect } from "react"
import "./styles/EditProfilePage.css"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const EditProfilePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [])

  return (
    <div className="edit-profile-page">
      editProfile
    </div>
  )
}
 
export default EditProfilePage