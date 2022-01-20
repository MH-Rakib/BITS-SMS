package com.bits.studentManagementSystem.studentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bits.studentManagementSystem.dao.StudentDao;
import com.bits.studentManagementSystem.entity.Student;

@Service
public class StudentServiceImplement implements StudentService {
	
	// List<Student> students;
	
	@Autowired
	private StudentDao courseDao;
	
	public StudentServiceImplement() {

		/*		
		students = new ArrayList<>();
		students.add(new Student(1,"Mehedi", "17-8-96", "male"));
		students.add(new Student(2, "Hasan", "18-8-97", "male"));
		students.add(new Student(3, "Fariha", "19-9-98", "female"));
		*/
	}

	@Override
	public List<Student> getStudents() {
		return courseDao.findAll();
	}
	
	@Override
	public Student getStudent(Long id) {
		
		Student s = courseDao.getById(id);
		return s;
	}
	
	@Override
	public Student addStudent(Student student) {
		return courseDao.save(student);
	}

	@Override
	public String deleteStudent(Long id) {
		courseDao.deleteById(id);
		return "Deleted Successfully";
	}

	@Override
	public Student updateStudent(Student student) {
		
		return courseDao.save(student);
	}

}
