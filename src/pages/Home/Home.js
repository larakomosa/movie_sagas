import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Home extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/details'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>HomePage</h2>
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
export default connect()(Home);
