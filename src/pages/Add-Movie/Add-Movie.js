import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Add extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre_id: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding movie`, this.state.newMovie);
    // TODO - axios request to server to add book

    if (
      this.state.newMovie.title === '' ||
      this.state.newMovie.poster === '' ||
      this.state.newMovie.description === ''
    ) {
      alert('Please select a number that indicates how you are feeling');
    } else if (this.state.newMovie.genre_id === '') {
      alert('Please choose a genre');
    } else {
      this.props.dispatch({
        type: 'POST_MOVIE',
        payload: this.state.newMovie,
      });
      this.props.history.push('/'); //moves user back to home to next page
    }
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user back to home to next page
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [propertyName]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        <input
          required
          placeholder="Title"
          value={this.state.newMovie.title}
          onChange={this.handleChangeFor('title')}
        />
        <input
          required
          placeholder="Poster URL"
          value={this.state.newMovie.poster}
          onChange={this.handleChangeFor('poster')}
        />{' '}
        <input
          required
          placeholder="Description"
          value={this.state.newMovie.description}
          onChange={this.handleChangeFor('description')}
        />
        <label for="Genre">Choose a Genre:</label>
        {/* <select name="Genre" id="genre_id">
          <option onChange={this.handleChangeFor('genre_id')} value="1">
            Adventure
          </option>
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
        </select> */}
        <select
          value={this.state.newMovie.value}
          onChange={this.handleChangeFor('genre_id')}
        >
          <option value="">Choose a Genre</option>
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
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleCancel}
        >
          Cancel
        </Button>
      </div>
    );
  }
}

export default connect()(Add);
//capturing values using drop down boxes:
//https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs

// This should show:

// X an input field (for the movie title)
// X an input field (for the movie poster image URL))
// X a textarea (for the movie description)
// X a dropdown (for the genres)
