import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; //brought in to access page linking

class SelectedItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.item.title}</h2>
        <img src={this.props.item.poster} />
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(SelectedItem));
