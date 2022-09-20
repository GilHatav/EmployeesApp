import { useState } from "react";
import "./EmployeeForm.css";

function UpdateEmployee(props) {
  const [f_name, setFirstName] = useState(props.f_name);
  const [l_name, setLastName] = useState(props.l_name);
  const [email, setEmail] = useState(props.email);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitHandler = () => {
    var emp = {
      id: props.id,
      f_name: f_name, 
      l_name: l_name, 
      email: email
    }
    props.updateEmployee(emp);
    props.viewForm();
  }

  return (
    <div className="new-employee-centered">
      <form onSubmit={onSubmitHandler}>
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

export default UpdateEmployee;
