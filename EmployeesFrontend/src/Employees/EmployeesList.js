
import EmloyeeItem from "./EmployeeItem";
import "./EmployeesList.css";

function EmployeesList(props) {
  
  return (
    <div className="general">
      <table className="content-table">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <EmloyeeItem
              key={employee.id}
              id={employee.id}
              f_name={employee.f_name}
              l_name={employee.l_name}
              email={employee.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
