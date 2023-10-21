import { useEffect } from "react"
import "./styles/EditProfilePage.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import GeneralButton from "../components/GeneralButton"

const EditProfilePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [])

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
    navigate('/login')
  }

  return (
    <div className="edit-profile-page">
      <GeneralButton label="Log Out" onButtonClick={logout} />
    </div>
  )
}
 
export default EditProfilePage