package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import server.business.Employee;
import server.dataAccess.EmployeeDao;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeDao employeeDao;

    @Autowired
    public EmployeeService(@Qualifier("MySql") EmployeeDao employeeDao) {
        this.employeeDao = employeeDao;
    }

    public int insertEmployee(Employee employee){

        return employeeDao.insertEmployee(employee);
    }

    public List<Employee> getAllEmployees(){return employeeDao.getAllEmployees();}

    public Employee getEmployeeByEmail(String email){return employeeDao.getEmployeeByEmail(email);}

    public int updateEmployee(Employee employee) {return employeeDao.updateEmployee(employee);}
}
