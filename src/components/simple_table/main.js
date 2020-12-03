import React from 'react';
import { connect } from 'react-redux';
import { nextPeople, prevPeople } from '../../redux/redux';
import STContent from './st_content'

// SimpleTable.js

export class SimpleTable extends React.Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <div>
          <STContent page={
            this.props.people || 1
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

// TableContainer.js
const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = {
  nextPeople,
  prevPeople
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTable);

export default TableContainer;