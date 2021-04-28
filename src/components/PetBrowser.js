import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petsToRender = this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })

  return <div className="ui cards">{petsToRender}</div>
  }
}

export default PetBrowser
