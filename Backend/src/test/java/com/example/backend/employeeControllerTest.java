package com.example.backend;

import com.example.backend.model.Employee;
import com.example.backend.repository.IEmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class employeeControllerTest {
    @Autowired
    private IEmployeeRepository employeeRepository;

    @Autowired
    private TestEntityManager testEntityManager;


    @Test
    void createEmployeeTest() {
        Employee employee = new Employee();
        employee.setFirstName("Employee 1");
        employee.setLastName("Employee LastName");
        employee.setEmailId("employee1@gmail.com");

        Employee saveEmployee = employeeRepository.save(employee);
        Employee checkEmployee = testEntityManager.find(Employee.class, saveEmployee.getId());

        assertThat(checkEmployee.getFirstName()).isEqualTo(employee.getFirstName());
    }
}
