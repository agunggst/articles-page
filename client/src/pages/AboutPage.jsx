import { useEffect, useState } from "react"
import "./styles/AboutPage.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AboutPage = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({})
  const [organizations, setOrganizations] = useState([])
  const [experiences, setExperiences] = useState([])
  const [education, setEducation] = useState({})

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      setUserInfo(userInfo)

      let config = {
        method: 'GET',
        url: `http://localhost:3000/organizations/?userId=${userInfo.id}`
      }
      const organizations = await axios(config)
      setOrganizations(organizations.data)

      config = {
        method: 'GET',
        url: `http://localhost:3000/experiences/?userId=${userInfo.id}`
      }
      const experiences = await axios(config)
      setExperiences(experiences.data)

      config = {
        method: 'GET',
        url: `http://localhost:3000/educations/?id=${userInfo.educationId}`
      }
      const education = await axios(config)
      setEducation(education.data[0])
    } catch (error) {
      console.log('error getUserData', error);
    }
  }

  return (
    <div className="about-page">
      <div className="profile-section section">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={userInfo.avatar} alt="article" className="profile-avatar"/>
        </div>
        <h5 className="label">Name</h5>
        <div className="info">{userInfo.name}</div>
        <h5 className="label">Education</h5>
        <div className="info">{education.name}</div>
        <h5 className="label">Address</h5>
        <div className="info">{userInfo.address}</div>
      </div>
      <h4 className="section-title">Experiences</h4>
      <div className="experiences-section section">
        {experiences.map((experience, index) => {
            return (
              <div key={index}>
                <h5 className="label">{experience.name}</h5>
                <div className="info">{experience.description}</div>
              </div>
            )
        })}
      </div>
      <h4 className="section-title">Organizations</h4>
      <div className="organizations-section section">
        {organizations.map((organization, index) => {
            return (
              <div key={index}>
                <h5 className="label">{organization.name}</h5>
                <div className="info">{organization.description}</div>
              </div>
            )
        })}
      </div>
    </div>
  )
}
 
export default AboutPage