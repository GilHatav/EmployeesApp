package server.api;

import org.springframework.web.bind.annotation.*;
import server.business.Employee;
import server.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee){
        if(!employee.getEmail().contains("@")){
             return new ResponseEntity<>("Email is not valid", HttpStatus.BAD_REQUEST);

        }
        employeeService.insertEmployee((employee));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public List<Employee> getAllEmployees(){return employeeService.getAllEmployees();}

    @GetMapping(params = "email")
    public Employee getEmployeeByEmail(@RequestParam(name = "email") String email){return employeeService.getEmployeeByEmail(email);}

    @PutMapping
    public ResponseEntity<String> updateEmployee(@RequestBody Employee employee){
        if(!employee.getEmail().contains("@")){
            return new ResponseEntity<>("Email is not valid",HttpStatus.BAD_REQUEST);
        }
        int rowUpdated =  employeeService.updateEmployee(employee);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
