function people(state= 0, action) { 
  switch (action.type) {
    case 'REQUEST_PEOPLE':
      console.log('request')
      return state
    case 'RENDER_PEOPLE':
      console.log('render')
      return state
    default:
      return state
  }
}

export default people;