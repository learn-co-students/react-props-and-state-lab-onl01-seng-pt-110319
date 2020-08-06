import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

   
  
   getDemPets = () => {
    let mockapi = '/api/pets';

    if (this.state.filters.type !== 'all') {
      mockapi += `?type=${this.state.filters.type}`
    } 
  
  fetch(mockapi) 
    .then(res => res.json())
    .then(pets => this.setState({ pets: pets }));
  };
 
  onChangeType = ({ target: { value } }) => {
    this.setState({ filters : { ...this.SetState, type : value} });
  };


  onAdoptPet = petId => {
  const pets = this.state.pets.map( p => {
      return p.id === petId ? { ...p, isAdopted: true } : p ; 
  });
  this.setState({ pets: pets })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangetype={this.onChangeType}
              onFindPetsClick={this.getDemPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser petw={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
