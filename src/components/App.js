import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      pets:[],
      filters:{
        type:"all"
      }
    }
  }

  changeType=(newType)=>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType.target.value
      }
    })

  }

  fetchPets=()=>{
    let base="/api/pets"
    if(this.state.filters.type!=="all"){
      base+=`?type=${this.state.filters.type}`
    }
    fetch(base)
    .then(response=> response.json())
    .then(pets=> this.setState({pets: pets}))
  }

  adoptPet=(id)=>{

  }

render(){
  return(
    <div>
      <Filters onFindPetsClick={this.fetchPets} onChangeType={this.changeType}/>
      <PetBrowser onAdoptPet={this.adoptPet}/>
    </div>
  )
}
}

export default App
