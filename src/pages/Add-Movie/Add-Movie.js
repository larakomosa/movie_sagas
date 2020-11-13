import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Add extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding movie`, this.state.newMovie);
    // TODO - axios request to server to add book
    this.props.dispatch({
      type: 'POST_MOVIE',
      payload: this.state.newMovie,
    });
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
        {/* ('Adventure'), ('Animated'), ('Biographical'), ('Comedy'), ('Disaster'),
        ('Drama'), ('Epic'), ('Fantasy'), ('Musical'), ('Romantic'), ('Science
        Fiction'), ('Space-Opera'), ('Superhero'); */}
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
        <select name="Genre" id="genre">
          <option value="adventure">Adventure</option>
          <option value="animated">Animated</option>
          <option value="biographical">Biographical</option>
          <option value="comedy">Comedy</option>
          <option value="disaster">Disaster</option>
          <option value="drama">Drama</option>
          <option value="epic">Epic</option>
          <option value="fantasy">Fantasy</option>
          <option value="musical">Musical</option>
          <option value="romantic">Science Fiction</option>
          <option value="space opera">Space-Opera</option>
          <option value="superhero">Superhero</option>
        </select>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Add Movie
        </Button>
      </div>
    );
  }
}

export default connect()(Add);

// This should show:

// - an input field (for the movie title)
// - an input field (for the movie poster image URL))
// - a textarea (for the movie description)
// X a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

// > Hint: Look at the /api/movie POST route -- it's been made already
// > Hint: You'll want to use the genres that are in the db for your dropdown

// > Base functionality does not require being able to select more than one genre for a new movie
