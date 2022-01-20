package com.bits.studentManagementSystem.studentService;

import java.util.List;

import com.bits.studentManagementSystem.entity.Student;

public interface StudentService {
	
	public List<Student> getStudents();
	
	public Student getStudent(Long id);
	
	public Student addStudent(Student student);
	
	public String deleteStudent(Long id);
	
	public Student updateStudent(Student student);
	
}
