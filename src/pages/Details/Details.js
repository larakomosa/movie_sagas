import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user to next page
  };
  render() {
    return (
      <div>
        <h2>Details</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit}
        >
          Back to List
        </Button>
      </div>
    );
  }
}
export default connect()(Details);

// This should show all details **including genres**, for the selected movie.
//  > Hint : You can make a GET request for a specific movie.
// The details page should have the button:
