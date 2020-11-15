import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; //brought in to access page linking

class SelectedItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="image col-4">
          <img src={this.props.store.selected.poster} class="rounded" />
        </div>
        <div className="description col-8">
          <h1>{this.props.store.selected.title}</h1>
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
