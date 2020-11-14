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
  }
  render() {
    let htmlArray = null;
    if (this.props.store.selected.genreArray) {
      htmlArray = this.props.store.selected.genreArray.map((item, index) => {
        return <p key={index}>{item.category}</p>;
      });
    }
    return (
      <div>
        <h2>{this.props.store.selected.title}</h2>
        <SelectedItem />
        <div className="genres">{htmlArray}</div>
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
