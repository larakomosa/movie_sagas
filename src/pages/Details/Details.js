import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user to next page
  };

  handleMovie = (event) => {
    event.preventDefault();
    this.props.history.push('/add'); //moves user to next page
  };

  render() {
    return (
      <div>
        DETAILS PAGE
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Back to List
        </Button>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleMovie}
        >
          Add Movie
        </Button>
      </div> //temporary button for add-movie easy acces
    );
  }
}
export default connect()(Details);

// This should show all details **including genres**, for the selected movie.
//  > Hint : You can make a GET request for a specific movies---> ????
// The details page should have the button:
