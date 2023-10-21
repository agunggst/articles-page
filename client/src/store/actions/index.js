import axios from 'axios'

export const getAllLivePosts = () => {
  return async (dispatch) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const config = {
        method: 'GET',
        url: `http://localhost:3000/posts?status=true&userId=${userInfo.id}`
      }
      const { data } = await axios(config)
      dispatch({
        type: 'SET_POST',
        payload: {
          posts: data
        }
      })
    } catch (error) {
      console.log('error getAllLivePosts', error)
    }
  }
}

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const config = {
        method: 'GET',
        url: `http://localhost:3000/posts?userId=${userInfo.id}`
      }
      const { data } = await axios(config)
      dispatch({
        type: 'SET_POST',
        payload: {
          posts: data
        }
      })
    } catch (error) {
      console.log('error getAllPosts', error)
    }
  }
}