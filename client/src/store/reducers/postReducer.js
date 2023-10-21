const defaultState = {
  posts: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {...state, posts: action.payload.posts}
    default:
      return state
  }
}

export default reducer