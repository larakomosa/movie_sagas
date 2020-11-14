import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; //brought in to access page linking

class SelectedItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.store.selected.title}</h2>
        <img src={this.props.store.selected.poster} />
        <p>{this.props.store.selected.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(SelectedItem));
