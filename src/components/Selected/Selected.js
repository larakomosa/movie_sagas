import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import SelectedItem from '../SelectedItem/SelectedItem';

class Selected extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.store.selectedPoster,
    });
    //   this.props.dispatch({.    <----Genre and Poster are accessed through same request
    //     type: 'GET_SELECTED_GENRE',
    //     payload: this.props.store.selectedPoster,
    //   });
    // }}
  }

  render() {
    //Map is no longer needed for movie details since there is only one array.  Data will now be accessed through store.
    //Genre is still pulled in GET stored in arrays but only IDs, need to figured out that still
    return (
      <div>
        <SelectedItem />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Selected));

// This should show all details **including genres**, for the selected movie.
//  > Hint : You can make a GET request for a specific movies---> ????
// The details page should have the button:
