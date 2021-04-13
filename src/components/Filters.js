import React, {Component} from 'react';

 class Filters extends Component{


   render (){
     return(
          <div className="ui form">  
         <h3>Pet Type</h3>
         <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
         </div>
          <div className="field">
         <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
          </div>
        </div>
    
     )
   }
 }
  
export default Filters;