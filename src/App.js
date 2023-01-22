import React from 'react'
import { useState } from 'react'

export default function App() {

  const [state,setState]=useState({Name:"",Department:"",Rating:"",employees:[]});
  const [sharma,setSharma]=useState(false)


 function changeHandler (e) {
    setState({...state,[e.target.name] : e.target.value})
    console.log(state)

  }


function submitHandler  (e) 
{
  e.preventDefault();
  console.log("submit Handler Called")
  const empObj =
  {
    Name :state.Name,
    Department :state.Department,
    Rating : state.Rating
  }
  const arr = state.employees;
  arr.push(empObj);
  setState({employees:arr})
  // v=true;
  setSharma(!sharma)
}

  if(sharma===false){

 
  
    return (
      
      <div>
        <h1 id='header'>Employee Feedback Form</h1>
        <form id='form'>
          <label htmlFor="Name">Name:  </label>
          <input id='input' type="text" name="Name" value={state.Name} onChange={changeHandler}></input>
          <br /><br />
          <label htmlFor="Department">Department:  </label>
          <input id='input' type="text" name="Department" value={state.Department} onChange={changeHandler}></input>
          <br /><br />
          <label htmlFor="Rating">Rating:  </label>
          <input id='input' type="number" name="Rating" value={state.Rating} onChange={changeHandler}></input>
          <br /><br />
          <button id='button' style={{fontStyle:"italic"}} type='button' onClick={submitHandler}>Submit</button>

        </form>

       

      </div>
    )
  }else{

    return(
      <div style={{textAlign:"center"}}>
        <button onClick={()=>setSharma(!sharma)}>Back</button>
      <div id='main-container'>
      {state.employees.map((value,index)=>
      {
        
        // <button onClick={setSharma(!sharma)}>Back</button>
        return (
        // <div id='ComeBack'>
        <span id='container'>
         {/* <div>sharma ji</div>  */}
        <span  style={{}} key={index}>Name| {value.Name},  Department| {value.Department},  Rating| {value.Rating}</span>
         </span>
        //  </div>
        )
      })
}
</div>
</div>
)
  }
  }
  
  
  



//  export default App 
