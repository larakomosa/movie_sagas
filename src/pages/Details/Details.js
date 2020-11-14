import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Selected from '../../components/Selected/Selected';

class Details extends Component {
  render() {
    return (
      <div>
        <Selected />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Details));

// This should show all details **including genres**, for the selected movie.
//  > Hint : You can make a GET request for a specific movies---> ????
// The details page should have the button:
