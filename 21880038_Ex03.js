let random = require("./21880038_Ex02");

let controller ={};
controller.generate =(students)=>{
    // for(let i=0;i<students.length;i++){
    //     let student =students[i];
    //     for(let j =0;j<student.grades.length;j++){
    //         student.grades[j].grade =random(0,10);
    //     }
    // }
    students.forEach(student=>{
        student.grades.forEach(grade => grade.grade =random(0,10));
    });
}
controller.average = (students)=>{
    students.forEach(student =>{
        let total =0;
        student.grades.forEach(grade=>total+=grade.grade);
        student.average = student.grades.length ? total/student.grades.length : total=0;
    });
}
controller.normalize = (students)=>{
    students.forEach(student =>{      
        student.grades.forEach(grade=>grade.grade = parseFloat(grade.grade.toFixed(2)));
        student.average =parseFloat(student.average.toFixed(2));
    });
    
}
module.exports = controller;
