import React, { Component, createContext, useState } from 'react';

const FavoriteContext = createContext()

class FavoriteContextProvider extends Component {
  state = {  
    toggle: true,
    name: "Jerry"
  } 

  update = () => {
    this.setState({ toggle: !this.state.toggle})
  }

  render() { 
    return (
      <FavoriteContext.Provider value={{...this.state, update: this.update}}>
        {this.props.children}
      </FavoriteContext.Provider>
    );
  }
}
 
export {FavoriteContextProvider, FavoriteContext};
