import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import MovieList from '../../components/MovieList/MovieList.js';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/details'); //path tbd
  };

  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Home);
