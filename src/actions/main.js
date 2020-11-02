export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'
export const RENDER_PEOPLE = 'RENDER_PEOPLE'

function requestPeople(page) {
  return {
    type: REQUEST_PEOPLE,
    page
  }
}

function renderPeople(json) {
  return {
    type: RENDER_PEOPLE,
    json
  }
}

export const fetchPeople = (page) => {
  return async (dispatch) => {
      dispatch(requestPeople(page))

      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
      const json = await response.json()

      dispatch(renderPeople(json))
  }
}