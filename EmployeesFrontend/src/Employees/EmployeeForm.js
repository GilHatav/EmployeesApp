import { useState } from "react";
import config from "../config.js"
import "./EmployeeForm.css";

const API = config.api;

function EmployeeForm(props) {
  const [f_name, setFirstName] = useState("");
  const [l_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addNewEmployee = () => {

      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            f_name: f_name, 
            l_name: l_name, 
            email: email
          }
        )
      })
        .then((resp) => {
          if(resp.status === 200){
            window.location.reload(false);
          }

          else{
            alert("An error occured");
          }
          
        })
  }

  return (
    <div className="new-employee">
      <form onSubmit={addNewEmployee}>
        <div className="employee_form">
          <div className="employee_form">
            <label>First Name</label>
            <input
              type="text"
              value={f_name}
              placeholder={"First Name"}
              onChange={firstNameChangeHandler}
            />
          </div>
          <div className="employee_form">
            <label>Last Name</label>
            <input
              type="text"
              value={l_name}
              placeholder={"Last Name"}
              onChange={lastNameChangeHandler}
            />
          </div>
          <div className="employee_form">
            <label>Email</label>
            <input
              type="text"
              value={email}
              placeholder={"Email"}
              onChange={emailChangeHandler}
            />
          </div>
        </div>
        <div>
          <button type="submit">{props.submitBtnName}</button>
          <button onClick={props.viewForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
