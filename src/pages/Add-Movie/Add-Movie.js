import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Add extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //path tbd
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
          Stub
        </Button>
      </div>
    );
  }
}
export default connect()(Add);
