import { useEffect, useState, useRef } from "react"
import "./styles/PostPage.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import GeneralButton from "../components/GeneralButton"

const PostPage = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) navigate('/login')
    getAllPosts()
    setTimeout(() => {
      inputRef.current.focus()
    }, 500)
  }, [])

  const getAllPosts = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const config = {
        method: 'GET',
        url: `http://localhost:3000/posts?userId=${userInfo.id}`
      }
      const { data } = await axios(config)
      setPosts(data)
    } catch (error) {
      console.log('error getAllPosts', error)
    }
  }

  const onChangeInput = (key, index, value) => {
    let fakePosts = [...posts]
    if (key === 'status') {
      fakePosts[index][key] = !fakePosts[index][key]
    } else {
      fakePosts[index][key] = value
    }
    setPosts(fakePosts)
  }

  const addPost = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const payload = {
        name: '',
        content: '',
        status: false,
        userId: userInfo.id
      }
      const config = {
        method: 'POST',
        url: `http://localhost:3000/posts`,
        data: payload
      }
      await axios(config)
      let fakePosts = [...posts]
      fakePosts.push(payload)
      setPosts(fakePosts)
    } catch (error) {
      console.log('error addPost', error)
    }
  }

  const saveData = async () => {
    try {
      for (let i = 0; i < posts.length; i++) {
        const config = {
          method: 'PUT',
          url: `http://localhost:3000/posts/${posts[i].id}`,
          data: posts[i]
        }
        await axios(config) 
      }
      getAllPosts()
    } catch (error) {
      console.log('error saveData', error)
    }
  }

  return (
    <div className="post-page">
      <div className="posts-container">
        {
          posts.map((post, index) => {
            return (
              <div className="post-card" key={index}>
                {index !== 0 && <input type="text" value={post.name} onChange={(e) => onChangeInput('name', index, e.target.value)} className="custom-input-post-name" spellCheck="false"/>}
                {index === 0 && <input ref={inputRef} type="text" value={post.name} onChange={(e) => onChangeInput('name', index, e.target.value)} className="custom-input-post-name" spellCheck="false"/>}
                <div className="body">
                  <textarea value={post.content} onChange={(e) => onChangeInput('content', index, e.target.value)} className="custom-input-post-content" rows="10" spellCheck="false"/>
                </div>
                <div className="is-publish-container">
                  Publish this article? <input type="checkbox" checked={post.status} onChange={(e) => onChangeInput('status', index, e.target.value)}/>
                </div>
              </div>
            )
          })
        }
        <div className="add-button-container">
          <div className="add-button" onClick={addPost}>+</div>
        </div>
      </div>
      <div className="footer-submit">
        <GeneralButton label="Save" onButtonClick={saveData} />
      </div>
    </div>
  )
}
 
export default PostPage