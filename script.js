//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	person1()
	{
		return(
			this.get name+"is the name of the person"+this.set age+"is the name of person"
		);
	}
}

class Student extends Person {
	
}

class Teacher extends Person {}
const Person =new Person("Abhinav","60");
const Student=new Student("","");
console.log(Person.name());
console.log(Student.study());
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
