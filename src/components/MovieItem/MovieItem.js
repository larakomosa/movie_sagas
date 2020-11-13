import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; //brought in to access page linking

class MovieItem extends Component {
  // deleteFruit = () => {
  //   console.log('button triggered');
  //   this.props.dispatch({
  //     type: 'DELETE_FRUIT',
  //     payload: this.props.basketItem.id,
  //   });
  // };
  handleClick = (event) => {
    console.log('meow');
    this.props.history.push(`/details`);
  };

  render() {
    return (
      <div className="itemDiv col-4">
        <div className="movieBox" onClick={this.handleClick}>
          <div className="titleControl"> {this.props.item.title}</div>
          <img src={this.props.item.poster} />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(MovieItem));

//Using withRouter to access this.props.history.push
//stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
