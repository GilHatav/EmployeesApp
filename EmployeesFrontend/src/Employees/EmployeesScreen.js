import {useState, useEffect} from 'react'
import EmployeeForm from "./EmployeeForm";
import EmployeesList from "./EmployeesList";
import NewEmployee from './NewEmployee'
import SearchEmployee from './SearchEmployee';
import config from "../config.js"

const API = config.api;

function EmployeesScreen(props) {

    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);

  //Functions
  useEffect(() => {
    const getAllEmployees = () => {
      fetch(API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setEmployees(data);
        })
        .catch(e=>console.error("error!",e));
    };
    getAllEmployees();
  }, []);
    
    const viewForm = () => {setShowForm((prevState) => !prevState)}

    const getEmployee = (term) => {
        fetch(API + "/?email=" + term, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setEmployees([data]);
            }).catch(e=>console.error("error!",e));
    }
    const getAll = () => {
        fetch(API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setEmployees(data);
          }).catch(e=>console.error("error!",e));
      };
      
    return (
        <div>
            {showForm ? <EmployeeForm submitBtnName={"Add Employee"}  viewForm={viewForm} getAll={getAll}/>: <NewEmployee viewForm={viewForm}/>}  
            <SearchEmployee submitFunc={getEmployee} getAll={getAll}></SearchEmployee>           
            <EmployeesList employees={employees} />
        </div>
    )
}

export default EmployeesScreen;
