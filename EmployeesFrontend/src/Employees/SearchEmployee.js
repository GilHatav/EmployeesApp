import { useState } from "react"
import "./SearchEmployee.css"

function SearchEmployee (props){
   const [term, setTerm] = useState("");

   const searchInputHanler = (event) => {
    var termValue = event.target.value 
    setTerm(termValue);
    if(termValue === ""){
        props.getAll();
    }
  };

  const peform = () =>{
    props.submitFunc(term)
  }

    return(
        <div className="search-container">
            <form onSubmit={peform} >
            <input 
            className="search-input" 
            type="text" 
            value={term}
            placeholder="Search" 
            onChange={searchInputHanler} />
            <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}

export default SearchEmployee