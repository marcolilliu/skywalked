import React, { useState, useEffect } from 'react'
import './st_content.css'
import fetchAPI from '../../api/fetch.js'

// HOOKS
export default function STContent({page}){
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchAPI(page)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
          console.log(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [page])
  
  if (error) {
    return <div className="STable-error">Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div className="STable-loading">Loading...</div>;
  } else {
    return (
      <div>
        <div className="STable">
          <div className="STable-content">
            <table>
              <thead>
                  <tr>
                      <th>Characters</th>
                      <th>Birth Year</th>
                      <th>Gender</th>
                      <th>Height (cm)</th>
                  </tr>
              </thead>
              <tbody>
              {items.map((item,index) => (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.birth_year}
                  </td>
                  <td>
                    {item.gender}
                  </td>
                  <td>
                    {item.height}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div> 
      </div>   
    )
  }
}

