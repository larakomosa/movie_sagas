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
    console.log('details page', this.props.store.selectedPoster);
  }

  render() {
    const select = this.props.store.selected.map((item, index) => {
      return <SelectedItem key={index} item={item} />;
    });
    return (
      <div>
        <h1>{select}</h1>
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
