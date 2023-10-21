const defaultState = {
  userInfo: {},
  isLoggedIn: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      localStorage.setItem('userInfo', JSON.stringify(action.payload.userInfo))
      return {...state, userInfo: action.payload.userInfo}
    case 'SET_IS_LOGGED_IN':
      localStorage.setItem('isLoggedIn', true)
      return {...state, isLoggedIn: action.payload.data}
    case 'LOGIN':
      localStorage.setItem('userInfo', JSON.stringify(action.payload.userInfo))
      localStorage.setItem('isLoggedIn', true)
      return {...state, userInfo: action.payload.userInfo, isLoggedIn: true}
    case 'LOGOUT':
      localStorage.removeItem('userInfo')
      localStorage.setItem('isLoggedIn', false)
      return {...state, userInfo: {}, isLoggedIn: false}
    default:
      return state
  }
}

export default reducer