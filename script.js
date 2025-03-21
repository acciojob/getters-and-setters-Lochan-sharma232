//complete this code
class Person {
	constructor(name,age){
		this._name =name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	set name(name){
		  this._name=name;
	}
	get age(){
		return this._age;
	}
	set age(age){
		return this=age;
	}
class Student extends Person {
	constructor(name,age){
	super(name,age);
	}
	study(){
		console.log(this.name+"is studying");
	}
}

class Teacher extends Person {
	constructor(name,age){
	super(name,age)
	}
		teach(){
      console.log(this.name+"is teaching");
	}
}
//const Person =new Person(name,age);
const Person=new Person("John","25");
const Student=new Student("Bob","40");
console.log(Person.());
console.log(Student.study());
console.log(Teacher.teach())
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
