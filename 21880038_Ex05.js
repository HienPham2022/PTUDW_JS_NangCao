let slowrandom = require("./21880038_Ex04");

let controller ={};
controller.generate = async (students)=>{
    for(let i=0;i<students.length;i++){
        let student =students[i];
        for(let j =0;j<student.grades.length;j++){
            student.grades[j].grade = await slowrandom(0,10);
        }
    }
    // foreach chậm 
    // students.forEach(student=>{
    //     student.grades.forEach(async (grade) => grade.grade = await slowrandom(0,10));
    // });
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
