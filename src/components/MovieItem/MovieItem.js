import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

class MovieItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  // deleteFruit = () => {
  //   console.log('button triggered');
  //   this.props.dispatch({
  //     type: 'DELETE_FRUIT',
  //     payload: this.props.basketItem.id,
  //   });
  // };
  handleClick = (id) => {
    console.log('meow');
    this.props.history.push(`/details/${this.props.item.id}`);
    this.props.dispatch({ type: 'ID_CALL', payload: this.props.item.id });
    console.log('id', id);
    console.log(this.props.item.id);
  };

  render() {
    return (
      <Card className="itemDiv col-4" borderColor="primary.main">
        <Divider />
        <CardContent
          className="movieBox"
          onClick={(event) => this.handleClick(this.props.item.id)}
        >
          <Typography
            className="titleControl"
            gutterBottom
            variant="h5"
            component="h2"
          >
            <h3>{this.props.item.title}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <img src={this.props.item.poster} class="rounded" />
          </Typography>
          <br />
          <button
            type="button"
            class="btn btn-outline-info .btm-sm"
            onClick={(event) => this.handleClick(this.props.item.id)}
          >
            <h5>More Information</h5>
          </button>
        </CardContent>
        <Divider />
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(MovieItem));
