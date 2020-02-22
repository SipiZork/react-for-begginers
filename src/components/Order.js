import React from 'react';
import { formatPrice } from '../helpers'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

class Order extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, This {fish ? fish.name : 'fish'} is no linger available{removeButton}</li>
    }

    return (
      <CSSTransition key={key} timeout={300} unmountOnExit appear classNames="item item">
        <li key={key}>
          <span className={this.props.classes}>{count}lbs {fish.name} {removeButton} </span>
          <span className="price">{formatPrice(count * fish.price)}</span>
        </li>
      </CSSTransition>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>

        <TransitionGroup className="order" component="ul">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </TransitionGroup>
      </div>
        );
  }
}

Order.propTypes = {
  fishes: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  removeFromOrder: PropTypes.func.isRequired
}

export default Order;
