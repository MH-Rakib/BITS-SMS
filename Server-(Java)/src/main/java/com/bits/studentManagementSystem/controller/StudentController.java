package com.bits.studentManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bits.studentManagementSystem.entity.Student;
import com.bits.studentManagementSystem.studentService.StudentService;

@CrossOrigin
@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	//get all students
	@GetMapping("/api/v1/students")
	public List<Student> getStudents(){
		return this.studentService.getStudents();
	}
	
	@GetMapping("/api/v1/students/find/{id}")
	public Student getStudent(@PathVariable String id){
		return this.studentService.getStudent(Long.parseLong(id));
	}
	
	@PostMapping("/api/v1/students")
	public Student addStudent(@RequestBody Student student){
		return this.studentService.addStudent(student);
	}
	
	@PutMapping("/api/v1/students")
	public Student updateStudent(@RequestBody Student student){
		return this.studentService.updateStudent(student);
	}
	
	@DeleteMapping("/api/v1/students/{id}")
	public String deleteStudent(@PathVariable String id){
		return this.studentService.deleteStudent(Long.parseLong(id));
	}
	
}
