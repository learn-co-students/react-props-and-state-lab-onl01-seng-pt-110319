import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      pets:[],
      filters:{
        type:""
      }
    }
  }

  handleChange=(newType)=>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  fetchPets=(filter)=>{
    fetch(`api/pets/${filter}`)
    .then(response=> response.json())
    .then(pets=> console.log(pets))
  }

  adoptPet=(id)=>{

  }

render(){
  return(
    <div>
      <Filters onChangeType={this.handleChange}/>
      <PetBrowser onFindPetsClick={this.fetchPets} onAdoptPet={this.adoptPet}/>
    </div>
  )
}
}

export default App
