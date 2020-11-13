import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieItem extends Component {
  // deleteFruit = () => {
  //   console.log('button triggered');
  //   this.props.dispatch({
  //     type: 'DELETE_FRUIT',
  //     payload: this.props.basketItem.id,
  //   });
  // };
  handleClick = () => {
    console.log('meow meow');
  };

  render() {
    return (
      <div>
        <li>{this.props.item.title}</li>
        <img src={this.props.item.poster} onClick={this.handleClick} />
      </div>
    );
  }
}

//When a movie poster is clicked, a user should be brought to the `/details` view.

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieItem);
