package server.dataAccess;

import server.business.Employee;

import java.util.List;

public interface EmployeeDao {

    int insertEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getEmployeeByEmail(String email);

    int updateEmployee(Employee employee);
}
