import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import stylings
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class MovieItem extends Component {
  handleClick = (id) => {
    //sends user to targeting ID details page/sends ID to reducer
    this.props.history.push(`/details/${this.props.item.id}`);
    this.props.dispatch({ type: 'ID_CALL', payload: this.props.item.id });
  };

  render() {
    return (
      //used bootstrap to create grid for movie display
      <Card className="itemDiv col-4" borderColor="primary.main">
        <Divider />
        <CardContent
          className="movieBox" //container for styling (also allows user to click anywhere in div to access details page)
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
            class="btn btn-outline-warning .btm-sm"
            onClick={(event) => this.handleClick(this.props.item.id)} //upon click, function is triggers to direct user to targeted detail page.
          >
            <h4>Learn More</h4>
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

//Using withRouter to access this.props.history.push
//stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
