import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Add extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/details'); //path tbd
  };

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Next Page
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
// - a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

// > Hint: Look at the /api/movie POST route -- it's been made already
// > Hint: You'll want to use the genres that are in the db for your dropdown

// > Base functionality does not require being able to select more than one genre for a new movie
