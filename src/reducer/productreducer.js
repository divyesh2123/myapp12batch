const initialState = {

    items : [],
    isloadding: false,
    error : {}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'REQUESTSTART':
    return { ...state, isloadding : true }

  case 'SUC' :
    return {...state, items: payload, isloadding : false}

   case 'FAI' :

    return {...state, error : payload, isloadding: false}
    
  default:
    return state
  }
}
