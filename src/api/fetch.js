export default async function fetchAPI(page) {
    return fetch('https://swapi.dev/api/people/?page='+page)
}