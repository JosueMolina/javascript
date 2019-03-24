import React from 'react';
import PropTypes  from 'prop-types';
import firebase from 'firebase';
import base, { firebaseApp } from '../base';
import AddFishForm from './AddFishForm';
import Login from './Login';

class Inventory extends React.Component {
  
  state = {
    uid :  null,
    owner : null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      if ( user ) {
        this.authHandler( { user } );
      }
    });
  }

  handleChange = ( event, key ) => {
    const fish = this.props.fishes[ key ];
    // taka a copy of that fish and update it with the new data

    const updatedFish = { 
      ...fish,
      [ event.target.name ] : event.target.value
    };

    this.props.updateFish( key, updatedFish );
  }

  authHandler = async authData => {
    // 1. look up the current store in the firebase database
    const store = await base.fetch( this.props.storeId, { context : this } );
    
    // 2. claim it if there is no owner
    if( !store.owner ) {
      // save it as our own
      await base.post( `${ this.props.storeId }/owner`, {
        data : authData.user.uid
      });
    }

    // 3. set the statte of the inventory component to reflect the current user
    this.setState( {
      uid : authData.user.uid,
      owner : store.owner || authData.user.uid
    });
  }

  authenticate = ( provider ) => {
    const authProvider = new firebase.auth[`${ provider }AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then( this.authHandler );
  }

  logout = async () => {
    console.log('login out!');
    await firebase.auth().signOut();
    this.setState( { uid : null });
  }

  renderLogin = () => {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sing in to manage your store's inventory</p>
        <button className="facebook" onClick={ () => { this.authenticate( 'Facebook' ) } }>Log in with Facebook</button>
        <button className="github" onClick={ () => { this.authenticate( 'Github' ) } }>Log in with Github</button>
      </nav>
    )
  }

  renderInventory = key => {
    const fish = this.props.fishes[ key ];

    return (
      <div key={ key } className="fish-edit">

        <input type="text" name="name" value={ fish.name } placeholder="Fish name" 
          onChange={ (e) => this.handleChange( e, key ) } />

        <input type="text" name="price" value={ fish.price } placeholder="Fish price"
          onChange={ (e) => this.handleChange( e, key ) } />
        
        <select type="text" name="status" value={ fish.status } placeholder="Fish status" 
          onChange={ (e) => this.handleChange( e, key ) } >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea type="text" name="desc" value={ fish.desc } placeholder="Fish desc" 
          onChange={ (e) => this.handleChange( e, key ) }>
        </textarea>

        <input type="text" name="image" value={ fish.image } placeholder="Fish image"
          onChange={ (e) => this.handleChange( e, key ) } />

        <button onClick={ () => this.props.removeFish( key ) }>Remove Fish</button>

      </div>
    )
  }

  render() {

    const logout = <button onClick={ this.logout } >Log Out!</button>;

    // check if they are not logged in at all
    if( !this.state.uid ) {
      return <Login authenticate={ this.authenticate } />
    }

    // chekc if they are the owner of the current store
    if ( this.state.uid !== this.state.owner ) {
      return (
        <div>
          <p>Sorry, you aren't the owner of this store</p>
          { logout }
        </div>
      )
    }

    return (
      <div>
        <p>Inventory</p>
        { logout }
        { Object.keys( this.props.fishes ).map( this.renderInventory ) }
        <AddFishForm addFish={ this.props.addFish } />
        <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  addFish : PropTypes.func.isRequired,
  removeFish :  PropTypes.func.isRequired,
  updateFish : PropTypes.func.isRequired,
  fishes : PropTypes.object.isRequired,
  match : PropTypes.object
};

export default Inventory;