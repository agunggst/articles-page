import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAllLivePosts } from "../store/actions"
import "./styles/HomePage.css"

const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const posts = useSelector(state => state.postReducer.posts)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
  }, [navigate])

  useEffect(() => {
    dispatch(getAllLivePosts())
  }, [dispatch])

  return ( 
    <div className="home-page">
      {/* {!posts.length && <div className="empty-state">No post yet.</div>} */}
      <div className="posts-container">
        {
          posts.map((post, index) => {
            return (
              <div className="post-card" key={index}>
                <h4 className="title">{post.name}</h4>
                <div className="body">
                  <p className="content">{post.content}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
 
export default HomePage