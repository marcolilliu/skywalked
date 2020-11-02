import React from 'react'
import store from '../../store/main'
import {fetchPeople} from '../../actions/main'

let page = 1 // init page to 1

/* Table */
function SimpleTable() {
  return (
    <div>
      {
        RenderTable()
      }
      {
        SimpleNavPag()
      }
    </div>
  );
}

function SimpleNavPag(){
  return (
    <div>
      <button onClick={NextPage}>Next</button>
      <button onClick={PrevPage}>Previous</button>
    </div>
  )
}

function RenderTable(){
  store.dispatch(fetchPeople(page))
  return (
    <div>
      come faccio a fare il render dei valori del json?
    </div>
  )
}

function NextPage(){
  page += 1
  store.dispatch(fetchPeople(page))
}

function PrevPage(){
  page -= 1
  store.dispatch(fetchPeople(page))
}

export default SimpleTable