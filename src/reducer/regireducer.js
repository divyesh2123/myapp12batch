const initialState = {
    isloadding : false,
    response: {},
    error : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'START':
    return { ...state, isloadding : true }
 
  case 'SUC' :
    return { ...state, isloadding : false, response: payload }
 
  case 'FAI':
    return { ...state, isloadding : false, error: payload }
  default:
    return state
  }
}
