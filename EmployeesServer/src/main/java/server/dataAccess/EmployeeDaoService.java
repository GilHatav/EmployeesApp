package server.dataAccess;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import server.business.Employee;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@Repository("MySql")
public class EmployeeDaoService implements EmployeeDao {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Override
    public int insertEmployee(Employee employee) {
        String sql = "INSERT INTO employees (id, f_name, l_name, email) VALUES (?, ?, ?, ?)";
        int result = jdbcTemplate.update(sql, employee.getId().toString() ,employee.getF_name(), employee.getL_name(), employee.getEmail());
        return result;
    }

    @Override
    public List<Employee> getAllEmployees() {
        String sql = "SELECT * FROM employees";
        List<Employee> employees = jdbcTemplate.query(
                sql,
                (rs, rowNum) ->
                        new Employee(
                                rs.getString("id"),
                                rs.getString("f_name"),
                                rs.getString("l_name"),
                                rs.getString("email")
                        )
        );
        return employees;
    }

    public Employee getEmployeeByEmail(String email) {
        String sql = "SELECT * FROM employees WHERE email = ?";
        Employee employee = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Employee.class),  email);
        return employee;
    }

    public int updateEmployee(Employee employee){
        String sql = "UPDATE employees SET f_name = ?, l_name = ?, email = ? WHERE id = ?";
        jdbcTemplate.update(sql, employee.getF_name(), employee.getL_name(), employee.getEmail(), employee.getId().toString());
        return 1;
    }
}
