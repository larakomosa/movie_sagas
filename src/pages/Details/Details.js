import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.store.selectedPoster,
    });
    console.log('details page', this.props.store.selectedPoster);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user to next page
  };

  handleMovie = (event) => {
    event.preventDefault();
    this.props.history.push('/add'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h1>Selected Poster</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Details));

// This should show all details **including genres**, for the selected movie.
//  > Hint : You can make a GET request for a specific movies---> ????
// The details page should have the button:
