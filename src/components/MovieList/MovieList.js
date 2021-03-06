import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/MovieItem.js';
import '../MovieItem/MovieItem.css'; //imported so item specific formatting is included on render

class MovieList extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  render() {
    //map function iterates over movies array
    const htmlArray = this.props.store.movies.map((item, index) => {
      return <MovieItem key={index} item={item} />;
    });
    return (
      <div className="bootstrap">
        <div className="row">{htmlArray}</div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieList);
