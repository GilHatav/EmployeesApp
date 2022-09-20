import './EmployeeForm.css'

function NewEmployee(props){
    return (
        <div className='new-employee'>
            <button onClick={props.viewForm}> Add New Employee </button>
        </div>
    )
}

export default NewEmployee