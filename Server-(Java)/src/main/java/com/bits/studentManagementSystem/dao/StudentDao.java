package com.bits.studentManagementSystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bits.studentManagementSystem.entity.Student;

public interface StudentDao extends JpaRepository<Student, Long> {

}
