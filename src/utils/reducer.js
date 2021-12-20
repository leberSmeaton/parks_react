export default function reducer(state, action) {
  switch(action.type) {
    case 'setParkPosts':{
      return {
        ...state,
        parkPosts: action.data
      }
    }
    case 'addParkPosts':{
      // do some validation on action.data (the new project)
      if(action.data.length > 0) {
        return {
          ...state,
          parkPosts: [action.data, ...state.projects]
        }
      }
      else {
        return state
      }
    }
    /* toggle park post open and closed... is this needed?
    case 'toggleParkPosts':{
      return {
        ...state,
        parkPosts: state.parkPosts === true ? true : false
      }
    } */
    case 'setLoading':{
      return {
        ...state,
        loading: action.data
      }
    }
    case 'setPark':{
      return {
        ...state,
        parks: action.data
      }
    }
    
    default: return state
  } 
}