import { useSelector } from "react-redux"
import Logo from "../assets/foxhub.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const userInfo = useSelector(state => state.userReducer.userInfo)

  return (
    <div className="navbar">
      <div className="right">
        <Link to="/">
          <img src={Logo} alt="article" className="logo"/>
        </Link>
        <Link to="/">
          <h4 className="navbar-title">Article App</h4>
        </Link>
      </div>
      <div className="left">
        <Link to="/posts" className="nav">my post</Link>
        <Link to="/about" className="nav">about</Link>
        <Link to="/contact" className="nav">contact us</Link>
        <Link to="/edit-profile" className="nav">user settings</Link>
        <img src={userInfo.avatar} alt="article" className="avatar" />
      </div>
    </div>
  )
}
 
export default Navbar