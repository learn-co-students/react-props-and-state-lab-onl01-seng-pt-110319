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

  handleOnChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleOnFindPetsClick = () => {
    let link = "/api/pets"
    if (this.state.filters.type !== 'all') {
      link += `?type=${this.state.filters.type}`
    }
    fetch(link) 
      .then(res => res.json())
      .then(json => this.setState({ pets: json }))
  }

  onAdoptPet = petId => {
    let pet = this.state.pets.find(pet => pet.id === petId)
    pet.isAdopted = true
    this.setState({ pet })
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
                onChangeType = {this.handleOnChangeType}
                onFindPetsClick = {this.handleOnFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet = {this.onAdoptPet} pets = {this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
