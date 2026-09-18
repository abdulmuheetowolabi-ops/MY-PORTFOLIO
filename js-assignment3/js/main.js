class Student{
    constructor (name, age, course, complexion, paymentstatus){
        
        
        this.name = name; 
        this.age = age;
        this.course = course;
        this.complexion = complexion;
        this.paymentstatus = paymentstatus;
    }

    introduction(){
        return`My name is ${this.name}, I am ${this.age} years old, I am ${this.complexion} in complexion my school fees payment status is ${this.paymentstatus}` 
    }

    courseOfstudy(){
        return `I am studying ${this.course} in AppClick Academy`
    }

    mypaymentstatus(){
        return `My school fees payment status is ${this.paymentstatus}`
    }

}

const student1 = new Student("Ife", 18, "Full-Stack", "dark", "paid");
const student2 = new Student("Farouk", 19, "Front-End", "dark", "not paid");
const student3 = new Student("Emmanuel", 28, "Full-stack", "dark", "paid");
const student4 = new Student("Mide", 18, "Full-stack", "dark", "not paid");
const student5 = new Student("Nifemi", 20, "Front-End", "fair", "paid");

const students = [student1, student2, student3, student4, student5];

students.forEach((student,index) => {
    console.log(`\n=========== STUDENT ${index + 1}: ${student.name} ===========`);

    console.log(student.introduction());
    console.log(student.courseOfstudy());
    console.log(student.mypaymentstatus());

})