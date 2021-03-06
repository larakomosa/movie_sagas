import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; //brought in to access page linking
import Divider from '@material-ui/core/Divider';

class SelectedItem extends Component {
  handleHome = (event) => {
    event.preventDefault();
    this.props.history.push('/'); //moves user back to home page
  };
  render() {
    return (
      //bootstrap is used to format page so poster and description are side by side
      //movie details are accessed from store using "selected" reducer
      <div className="row">
        <div className="image col-4">
          <img
            src={this.props.store.selected.poster}
            class="rounded"
            alt={this.props.store.selected.description}
          />
          <br />
          <button
            type="button"
            class="btn btn-outline-primary .btm-sm"
            onClick={this.handleHome}
          >
            <h4>Back to List</h4>
          </button>
        </div>
        <div className="description col-8">
          <h2>{this.props.store.selected.title}</h2>
          <Divider />
          <p>{this.props.store.selected.description}</p>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(SelectedItem));
