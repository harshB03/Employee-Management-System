package com.employee.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.backend.entity.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
	
}
