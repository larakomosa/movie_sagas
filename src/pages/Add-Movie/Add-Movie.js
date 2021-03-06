import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './Add-Movie.css';
import Divider from '@material-ui/core/Divider';
import swal from 'sweetalert';

class Add extends Component {
  state = {
    //sets initial state of newMovie object
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre_id: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault(); // TODO - axios request to server to add movie

    if (
      //requires user to fill all fields
      this.state.newMovie.title === '' ||
      this.state.newMovie.poster === '' ||
      this.state.newMovie.description === ''
    ) {
      swal('Please complete all input fields');
    } else if (this.state.newMovie.genre_id === '') {
      swal('Please choose a genre');
    } else {
      this.props.dispatch({
        type: 'POST_MOVIE', //dispatches post request
        payload: this.state.newMovie, //sends newMovie values
      });
      this.props.history.push('/'); //moves user back to homepage to after movie is submitted
    }
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user back to home page
  };

  handleChangeFor = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [propertyName]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="body">
        <h2>Add Movie</h2>
        <Divider />
        <form className="form">
          <input
            className="titleInput"
            required
            placeholder="Title"
            value={this.state.newMovie.title}
            onChange={this.handleChangeFor('title')}
          />
          <input
            className="posterInput"
            required
            placeholder="Poster URL"
            value={this.state.newMovie.poster}
            onChange={this.handleChangeFor('poster')}
          />{' '}
          <input
            className="descriptionInput"
            required
            placeholder="Description"
            value={this.state.newMovie.description}
            onChange={this.handleChangeFor('description')}
          />
          <br />
          <select
            className="dropdown"
            value={this.state.newMovie.value}
            onChange={this.handleChangeFor('genre_id')}
          >
            <option>Choose a Genre</option>
            <option value="1">Adventure</option>
            <option value="2">Animated</option>
            <option value="3">Biographical</option>
            <option value="4">Comedy</option>
            <option value="5">Disaster</option>
            <option value="6">Drama</option>
            <option value="7">Epic</option>
            <option value="8">Fantasy</option>
            <option value="9">Musical</option>
            <option value="10">Science Fiction</option>
            <option value="11">Space-Opera</option>
            <option value="12">Superhero</option>
          </select>
          <Button
            variant="outlined"
            color="default"
            type="submit"
            size="small"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
          {'  '}
          <Button
            variant="outlined"
            color="default"
            type="submit"
            size="small"
            onClick={this.handleCancel}
          >
            Cancel
          </Button>
        </form>
        <div className="footer"> </div>
      </div>
    );
  }
}

export default connect()(Add);
//capturing values using drop down boxes:
//https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
