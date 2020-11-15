import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import MovieList from '../../components/MovieList/MovieList.js';

class Home extends Component {
  //homepage with movies display
  render() {
    return (
      <div>
        <MovieList />
        <div className="footer"> </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Home);
