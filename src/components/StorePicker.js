import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class StorePicker extends React.Component {

  goToStore(event){
    event.preventDefault();
    const storeId = this.storeInput.value;
    // first grab the text from the box
    // second we're going to transition from / to /store/:storeId
    this.props.history.push(`store/${storeId}`);
  }

  render(){
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
}

export default withRouter(StorePicker);
