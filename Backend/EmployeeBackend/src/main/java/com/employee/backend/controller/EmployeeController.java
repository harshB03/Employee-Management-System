package com.employee.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.employee.backend.dtos.EmployeeDto;
import com.employee.backend.service.EmployeeServiceImpl;

import jakarta.persistence.Id;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	
	@PostMapping("/addEmployee")
	public String addEmployee(@RequestBody EmployeeDto employeeDto) {
		employeeServiceImpl.addEmployeeToDb(employeeDto);
		return "employee added to db";
	}
	
	@GetMapping("/employees")
	public List<EmployeeDto> getAllEmployees(){
		return employeeServiceImpl.getAllEmployeesDb();
	}
	
	@DeleteMapping("/employee/{id}")
	public String deleteEmployeeById(@PathVariable Long id) {
		employeeServiceImpl.deleteEmployeeById(id);
		return "employee deleted successfully";
	}
	
	@GetMapping("/employee/{id}")
	public EmployeeDto getEmployeeById(@PathVariable Long id) {
		return employeeServiceImpl.getEmployeeById(id);
	}
	
	@PutMapping("/employee/{id}")
	public EmployeeDto updateEmployeeData(@PathVariable Long id, @RequestBody EmployeeDto employeeDto) {
		EmployeeDto updatEmployeeDto = employeeServiceImpl.updateEmployeById(id,employeeDto);
		return updatEmployeeDto;
	}
	
}
