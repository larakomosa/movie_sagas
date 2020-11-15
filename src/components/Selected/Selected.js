import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import SelectedItem from '../SelectedItem/SelectedItem';
import '../SelectedItem/SelectedItem.css'; //imported so item specific formatting is including on render
import './Selected.css';
import Divider from '@material-ui/core/Divider';

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
        return <h3 key={index}>{item.category}</h3>;
      });
    }
    return (
      <div>
        <SelectedItem />
        <div className="genres col-8">
          <h2>Genres</h2>
          <Divider />
          {htmlArray}
        </div>
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
