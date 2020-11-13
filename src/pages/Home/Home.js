import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import MovieItem from '../MovieItem/MovieItem.js';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  render() {
    const htmlArray = this.props.store.movies.map((item, index) => {
      return <MovieItem key={index} item={item} />;
    });
    return (
      <div>
        <ul>{htmlArray}</ul>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Stub
        </Button>
        ;
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Home);
