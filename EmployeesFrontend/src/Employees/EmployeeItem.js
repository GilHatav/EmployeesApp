import { useState } from "react";
import UpdateEmployee from "./UpdateEmployee";
import config from "../config.js";
import "./EmployeeItem.css";

const API = config.api;

function EmloyeeItem(props) {
  const [id, setID] = useState(props.id);
  const [f_name, set_firstName] = useState(props.f_name);
  const [l_name, set_lastName] = useState(props.l_name);
  const [email, set_email] = useState(props.email);
  const [showForm, setShowForm] = useState(false);
    
  const viewForm = () => {setShowForm((prevState) => !prevState)}

  const updateEmployee = (emp) => {
    console.log("here");
    fetch(API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp)
    }).then((resp) => {
      if(resp.status === 200){
        set_firstName(emp.f_name);
        set_lastName(emp.l_name);
        set_email(emp.email);
      }
      else{
        alert("An error occured");
      }
      
    })
};

  return (
    <tr>
      <th>{id}</th>
      <th>{f_name}</th>
      <th>{l_name}</th>
      <th>{email}</th>
      <th>
      {showForm ? <UpdateEmployee submitBtnName={"Update Employee"} 
      viewForm={viewForm} 
      id={id} 
      f_name={f_name} 
      l_name={l_name} 
      email={email}
      updateEmployee={updateEmployee}/> : 
      <button onClick={viewForm} className="update_button">Update</button>}
      </th>
    </tr>
  );
}

export default EmloyeeItem;
