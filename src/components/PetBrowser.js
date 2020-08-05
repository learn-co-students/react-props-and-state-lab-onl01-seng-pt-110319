import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

 
    render() {
      const petCards = this.props.pets.map(pet => 
        <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      ); 

      // const petCards = this.props.pets.map(pet => (
      //   <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      // )) 
      //same as
      // let newArry = arr.map( n => n+2)
      // let newArry = arr.map( n => (n+2))
    return <div className="ui cards">{petCards}</div>

  }
}

export default PetBrowser

 


