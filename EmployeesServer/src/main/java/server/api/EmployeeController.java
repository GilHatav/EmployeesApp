package server.api;

import org.springframework.web.bind.annotation.*;
import server.business.Employee;
import server.service.EmployeeService;

import java.util.List;

@RequestMapping("api/employee")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping
    public void addEmployee(@RequestBody Employee employee){
        employeeService.insertEmployee((employee));
    }

    @GetMapping
    public List<Employee> getAllEmployees(){return employeeService.getAllEmployees();}

    @GetMapping(params = "email")
    public Employee getEmployeeByEmail(@RequestParam(name = "email") String email){return employeeService.getEmployeeByEmail(email);}

    @PutMapping
    public int updateEmployee(@RequestBody Employee employee){
        Employee emp = employee;
        return employeeService.updateEmployee(employee);
    }



}
