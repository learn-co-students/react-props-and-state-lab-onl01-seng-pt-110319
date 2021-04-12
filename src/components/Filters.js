import React, {Component} from 'react';

 class Filters extends Component{
   render (){
     return(
       <form>
         <h3>Pet Type</h3>
          <select id="type">
            <option value=""></option>
          </select>

         <button type="submit">Find pets</button>
       </form>
       
    
     )
   }
 }
  
export default Filters;