import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class MovieItem extends Component {
  // deleteFruit = () => {
  //   console.log('button triggered');
  //   this.props.dispatch({
  //     type: 'DELETE_FRUIT',
  //     payload: this.props.basketItem.id,
  //   });
  // };

  render() {
    return (
      <div>
        <li>{this.props.item.title}</li>
        <img src={this.props.item.poster} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieItem);
