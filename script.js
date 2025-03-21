//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	aboutperson()
	{
		return(
			this.get name+this.set age;
		);
	}
}
class Student extends Person {
	constructor(name,age){
	super(name,age)
	}
	study(){
		return(
			this.name+"is studying";
	}
}

class Teacher extends Person {
	teach(){
      return(
		  this.name+"is teaching";
	}
}
const Person =new Person(name,age);
const Student=new Student("Bob","40");
console.log(Person.aboutPerson());
//console.log(Student.study());
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
