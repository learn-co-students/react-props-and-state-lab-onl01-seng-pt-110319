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

  fetchPets = () => {
    
    let url = '/api/pets'

    if (this.state.filters.type === 'cat') {
      url = '/api/pets?type=cat'
    } else if (this.state.filters.type === 'dog') {
      url = '/api/pets?type=dog'
    }else if (this.state.filters.type === 'micropig') {
      url = '/api/pets?type=micropig'
    }
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ pets: data}))
    console.log(url)

  }



  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })



  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      }
    })

    this.setState({pets: pets})

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
