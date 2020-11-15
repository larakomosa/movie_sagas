import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    this.props.history.push(`/details/`);
    this.props.dispatch({ type: 'ID_CALL', payload: this.props.item.id });
    console.log('id', id);
    console.log(this.props.item.id);
  };

  render() {
    return (
      <Card className="itemDiv col-4" borderColor="primary.main">
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
            {this.props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <img src={this.props.item.poster} class="rounded" />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(MovieItem));
