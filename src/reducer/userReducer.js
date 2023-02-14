

export default (state = [], { type, payload }) => {
  switch (type) {

  case 'USERDATA':
    return [ ...state, ...payload ]

  default:
    return state
  }
}
