//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	aboutperson()
	{
		return(
			this.get name+"is the name of the person"+this.set age+"is the name of person"
		);
	}
}

class Student extends Person {
	this.study="";
}

class Teacher extends Person {}
const Person =new Person("John","25");
const Student=new Student("","");
console.log(Person.aboutPerson());
console.log(Student.study());
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
