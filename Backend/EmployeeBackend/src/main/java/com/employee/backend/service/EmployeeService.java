package com.employee.backend.service;

import java.util.List;

import com.employee.backend.dtos.EmployeeDto;

public interface EmployeeService {
	public String addEmployeeToDb(EmployeeDto employeeDto);
	public List<EmployeeDto> getAllEmployeesDb();
	public void deleteEmployeeById(Long id);
}
