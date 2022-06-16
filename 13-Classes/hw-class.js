class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log("Hi, my name is " + this.name);
    }
}
const pete = new Person('Pete', 47)
// pete.sayHi();

// Extended classes
// First, the new class name. Then 'extends' keyword. Then the parent class.
class Teacher extends Person {
    constructor(name, age, subject, roomNumber, teacherGrade) {
        super(name, age)
        this.subject = subject;
        this.roomNumber = roomNumber;
        this.teacherGrade = teacherGrade;
        this.assignmentsToGrade = [];
    }
    teach() {
        console.log("I'm teaching!")
    }
    addStudent(student, classroom) {
        classroom.addStudentToClass(student, this.name)
    }
    addAssignments(assignment, studentName) {
        this.assignmentsToGrade.push({
            assignmentName: assignment, studentName
        })
    }
}
class Student extends Person {
    constructor(name, age, grade, favoriteSubject) {
        super(name, age)
        this.grade = grade;
        this.favoriteSubject = favoriteSubject;
    }
    learn() {
        console.log("Look, I'm learning!")
    }
    handInAssignment(teacher, assignment) {
        teacher.addAssignments(assignment, this.name)
    }
}

class Classroom {
    constructor(roomNumber, floor) {
        this.roomNumber = roomNumber;
        this.floor = floor;
        this.studentCount = 0;
        this.studentList = []
    }
    showStudentCount() {
        console.log("There are " + this.studentCount + " students in here")
    }

    addStudentToClass(student, teacher) {
        student.teacher = teacher;
        this.studentList.push(student)
        this.studentCount++;

    }
}

const mrJones = new Teacher('Jones', 47, 'Math', 323, 4)
const rickJames = new Student("Rick James", 9, 4, "music")
const dollyParton = new Student("Dolly Parton", 8, 4, "lunch")
const jimHopper = new Student("Jim Hopper", 9, 4, "forensics")
const room105 = new Classroom(105, 1)



mrJones.addStudent(rickJames, room105);
mrJones.addStudent(jimHopper, room105)

room105.showStudentCount();

console.log(room105.studentList)

//mrJones.addAssignments("math practice 1-5", "Dolly");
dollyParton.handInAssignment(mrJones, "math practice")

console.log(mrJones.assignmentsToGrade)

// Practice: Create another Teacher and Classroom instance and some students for that class as well

class Chef extends Person {
    constructor(name, age, favoriteDish, stars) {
        super(name, age)
        this.favoriteDish = favoriteDish;
        this.stars = stars;
    }
}

const chef1 = Chef('Remy', 18, 'chicken parmagina', '3 star')
class Muscian extends Person {
    constructor(name, age, favoriteInstrument, skill) {
        super(name, age)
        this.favoriteDish = favoriteInstrument;
        this.skill = skill;
    }

}
const musc1 = new Muscian('Ray Charles', 21, 'Piano','prodigy')

    class Resturant{
        constructor(town, theme){
            this.town = town; 
            this.theme = theme;
        }
        // addEmployeetoClass(Muscian, Chef){
        
        // }
    }

    
    
