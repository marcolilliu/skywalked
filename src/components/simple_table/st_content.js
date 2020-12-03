import React, { useState, useEffect } from 'react'
import './st_content.css'

// Hook API call
export default function STContent({page}){
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/?page='+page)
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
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="STable">
        <div className="STable-content">
          <table>
            <thead>
                <tr>
                    <th>Characters</th>
                    <th>Birth Year</th>
                    <th>Gender</th>
                    <th>Height</th>
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
    );
  }
}