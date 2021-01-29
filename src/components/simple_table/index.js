import React from 'react'
import STContent from './st_content'
import { connect } from 'react-redux'
import { nextPeople, prevPeople } from '../../redux/redux'

// SIMPLE TABLE
export class SimpleTable extends React.Component {
  render() {
    return (
      <div>
        <div>
          <STContent page={
            this.props.people || 0
          }/>
        </div>
        <button onClick={() =>
            this.props.nextPeople()
          }>
          Next
        </button>
        <button onClick={() =>
            this.props.prevPeople()
          }>
          Previous
        </button>
      </div>
    );
  }
}

// SIMPLE TABLE CONTAINER
const mapStateToProps = state => ({
    people: state.people,
  })
const mapDispatchToProps = {
    nextPeople,
    prevPeople
  }
const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleTable)

export default TableContainer;