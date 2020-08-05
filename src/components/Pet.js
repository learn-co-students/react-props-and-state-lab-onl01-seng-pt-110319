import React from 'react'

class Pet extends React.Component {

 

  adoptedButtons = () => {
    
      if (this.props.pet.isAdopted != true) {

        return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
      } else {
        return <button className="ui disabled button" >Already adopted</button>

      }

    
  }




  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
        {this.props.pet.name}
        {this.props.pet.gender === 'female' ? '♀' : '♂' }
        {/* {this.props.pet.gender } */}
          </a>
          <div className="meta">
    <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
    <p>Age: PET AGE</p>
    {this.props.pet.age}
            <p>Weight: PET WEIGHT</p>
            {this.props.pet.weight}
          </div>
        </div>
        <div className="extra content">
  
        {this.adoptedButtons()}
        
        </div>
      </div>
    )
  }
}

export default Pet
