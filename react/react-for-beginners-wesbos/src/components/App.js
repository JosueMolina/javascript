import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'
import base from '../base';

class App extends React.Component {

  state = {
    fishes : {},
    order : {}
  }

  componentWillMount() {
    this.ref = base.syncState(`${ this.props.match.params.storeId }/fishes`, {
      context : this,
      state : 'fishes'
    });

    const localStorageRef = localStorage.getItem( `order-${ this.props.match.params.storeId }` );

    if ( localStorageRef ) {
      this.setState( { order : JSON.parse( localStorageRef ) });
    }
  }

  componentWillUpdate( nextProps, nextState ) {
    localStorage.setItem( `order-${ this.props.match.params.storeId }`, JSON.stringify( nextState.order ) );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState( { fishes } );
  }

  updateFish = ( key, updatedFish ) => {
    const fishes = { ...this.state.fishes };
    fishes[ key ] = updatedFish;
    this.setState({ fishes });
  }

  removeFish = ( key ) => {
    const fishes =  { ...this.state.fishes };
    fishes[ key ] = null;
    this.setState({ fishes });

  }

  loadSamples = () => {
    this.setState( { fishes : sampleFishes } );
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[ key ] = order[ key ] + 1 || 1;
    this.setState({ order });
  }

  removeFromOrder = ( key ) => {
    const order = { ...this.state.order };
    delete order[ key ];
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
            <ul className="list-of-fishes">
              { Object
                  .keys( this.state.fishes )
                  .map( key => <Fish 
                    index={ key }
                    key={ key } 
                    addToOrder={ this.addToOrder } 
                    details={ this.state.fishes[ key ] } /> 
                  )
              }
            </ul>
        </div>
        <Order 
          fishes={ this.state.fishes } 
          order={ this.state.order } 
          removeFromOrder={ this.removeFromOrder }
        />
        <Inventory 
          updateFish={ this.updateFish } 
          removeFish={ this.removeFish }
          fishes={ this.state.fishes } 
          loadSamples={this.loadSamples} 
          addFish={ this.addFish }
          storeId= { this.props.match.params.storeId }
        />
      </div>
    )
  }
}

App.propTypes = {
  match : PropTypes.object.isRequired
};

export default App;