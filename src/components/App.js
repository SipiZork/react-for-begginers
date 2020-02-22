import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import simpleFishes from '../sample-fishes';
import { base } from '../base';


class App extends React.Component {
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    // getinitialState
    this.state = {
      fishes: {},
      order: {},
      lastClick: null
    }
  }

  componentDidMount(){
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      }
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish(fish) {
    // update our state
    const fishes = { ...this.state.fishes };
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes });
  }

  updateFish(key, updatedfish) {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedfish;
    this.setState({ fishes });
  }

  removeFish(key) {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }

  loadSamples(){
    this.setState({
      fishes: simpleFishes
    });
  }

  addToOrder(key) {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
    this.state.lastClick = key;
  }

  removeFromOrder(key) {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map
              (
                key =>
                  <Fish
                    key={key}
                    index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder} />
              )
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.match.params}
          removeFromOrder={this.removeFromOrder}
          lastClick={this.state.lastClick} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes} />
        </div>
    );
  }
}

export default App;

//
