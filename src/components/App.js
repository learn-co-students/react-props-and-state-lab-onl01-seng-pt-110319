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

  fetchPets = (URL='/api/pets') => {
    console.log(URL)
    return fetch(`${URL}`)
    .then(response => response.json())
    .then(data => this.setState({ pets: data}))
  }

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })

    if (this.state.filters.type === 'all') {
      return this.fetchPets('/api/pets')
    } else if (this.state.filters.type === 'cat') {
      return this.fetchPets('/api/pets?type=cat')
    }else if (this.state.filters.type === 'dog') {
      return this.fetchPets('/api/pets?type=dog')
    }else if (this.state.filters.type === 'micropig') {
      return this.fetchPets('/api/pets?type=micropig')
    }

  }

  onAdoptPet = (id) => {

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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
