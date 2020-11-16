import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import stylings
import SelectedItem from '../SelectedItem/SelectedItem';
import '../SelectedItem/SelectedItem.css'; //imported so item specific formatting is including on render
import './Selected.css';
import Divider from '@material-ui/core/Divider';

class Selected extends Component {
  //"GETS" selected information upon page load
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.store.selectedPoster, //send targeted id with get request
    });
  }

  render() {
    let htmlArray = null;
    if (this.props.store.selected.genreArray) {
      //maps genreArray so it can be listed in render
      htmlArray = this.props.store.selected.genreArray.map((item, index) => {
        return <h3 key={index}>{item.category}</h3>;
      });
    }
    return (
      //SelectedItem brings in movie title, description and poster for targeted ID
      //HTMLArray prints genres for targeted ID
      <div>
        <SelectedItem />

        <div className="genres col-8">
          <h2>Genres</h2>
          <Divider />
          {htmlArray}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Selected));
