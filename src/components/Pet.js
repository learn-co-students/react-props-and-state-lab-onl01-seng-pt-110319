import React from 'react'

class Pet extends React.Component {
  adopt = () => {
    if (this.props.pet.isAdopted === true){
      return <button className="ui disabled button" >Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
}
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}T</p>
          </div>
        </div>
        <div className="extra content">
        {this.adopt()}
        </div>
      </div>
    )
  }
}

export default Pet
