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
  change= e =>{
    this.setState({
      [e.target.name]: e.target.value 
    })
  }
  fetchPets=()=>{
    let address = "/api/pets"
    if (this.state.filters.type !== 'all') {
      address += `?type=${this.state.filters.type}`
    }
    fetch(address) 
      .then(res => res.json())
      .then(json => this.setState({ pets: json }))
  }

  
  adopt=(petId)=>{
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    });
     this.setState({ pets: pets})
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
              onChangeType={e => this.change(e)}
              onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.adopt}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
