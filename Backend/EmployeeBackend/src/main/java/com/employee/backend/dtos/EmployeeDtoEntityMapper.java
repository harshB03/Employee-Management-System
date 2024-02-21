package com.employee.backend.dtos;

import org.springframework.stereotype.Component;

import com.employee.backend.entity.EmployeeEntity;

@Component
public class EmployeeDtoEntityMapper {
	
	public EmployeeEntity employeeDtoToEntity(EmployeeDto employeeDto) {
		EmployeeEntity employeeEntity = new EmployeeEntity();
		employeeEntity.setId(employeeDto.getId());
		employeeEntity.setFirstName(employeeDto.getFirstName());
		employeeEntity.setLastName(employeeDto.getLastName());
		employeeEntity.setEmail(employeeDto.getEmail());
		
		return employeeEntity;
	}
	
	public EmployeeDto employeeEntityToDto(EmployeeEntity employeeEntity) {
		EmployeeDto employeeDto = new EmployeeDto();
		employeeDto.setId(employeeEntity.getId());
		employeeDto.setFirstName(employeeEntity.getFirstName());
		employeeDto.setLastName(employeeEntity.getLastName());
		employeeDto.setEmail(employeeEntity.getEmail());
		return employeeDto;
	}
}
