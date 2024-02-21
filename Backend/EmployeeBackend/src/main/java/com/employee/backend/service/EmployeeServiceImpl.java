package com.employee.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.backend.dtos.EmployeeDto;
import com.employee.backend.dtos.EmployeeDtoEntityMapper;
import com.employee.backend.entity.EmployeeEntity;
import com.employee.backend.repository.EmployeeRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeServiceImpl {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private EmployeeDtoEntityMapper employeeDtoEntityMapper;
	
	public String addEmployeeToDb(EmployeeDto employeeDto)
	{
		EmployeeEntity employeeEntity = employeeDtoEntityMapper.employeeDtoToEntity(employeeDto);
		employeeRepository.save(employeeEntity);
		return "added successfully";
	}

	public List<EmployeeDto> getAllEmployeesDb() {
		List<EmployeeEntity> allEmployeeEntities = employeeRepository.findAll();
		List<EmployeeDto> allEmployeeDtos = allEmployeeEntities.stream()
				.map(employee -> employeeDtoEntityMapper.employeeEntityToDto(employee)).collect(Collectors.toList());
		return allEmployeeDtos;
	}

	public void deleteEmployeeById(Long id) {
		employeeRepository.deleteById(id);
		return;
		
		
	}

	public EmployeeDto getEmployeeById(Long id) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
		EmployeeDto employeeDto = employeeDtoEntityMapper.employeeEntityToDto(employeeEntity);
		return employeeDto;
	}

	public EmployeeDto updateEmployeById(Long id, EmployeeDto employeeDto) {
		EmployeeEntity employeeEntity =  employeeRepository.findById(id).get();
		EmployeeDto updatedEmployeeDto = employeeDtoEntityMapper.employeeEntityToDto(employeeEntity);
		updatedEmployeeDto.setFirstName(employeeDto.getFirstName());
		updatedEmployeeDto.setLastName(employeeDto.getLastName());
		updatedEmployeeDto.setEmail(employeeDto.getEmail());
		return updatedEmployeeDto;
	}
}
