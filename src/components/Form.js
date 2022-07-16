import React from "react";

function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // console.log(firstName)
  // function handleFirstNameChange(event){
  //   setFirstName(event.target.value)
  // }

  // function handleLastNameChange(event){
  //   setLastName(event.target.value)
  // }

  return (
    <form>
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;



// import React, {useState} from "react";

// function Form(){

//   const [newsLetter, setNewsLetter] = useState(false)

// function handleNewsLetterChange(event){
//   setNewsLetter(event.target.checked)
// }

// return(
// <form>
//   <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//   <input type="checkbox" 
//     id="newsletter" 
//     onChange={handleNewsLetterChange} 
//     checked={newsLetter}
//   />
// </form>
// )

// }

// export default Form;










