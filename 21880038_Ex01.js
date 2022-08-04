var controller = require('./21880038_Ex03');
var wait = require('./21880038_Ex04');
var slow_wait = require('./21880038_Ex05');
const _Class = [    
      {
        ID_student: "112345",
        Name: "PVHien",
        Courses:[{
              Course_Name:"JS",
              Score:0},  
              {Course_Name:"R",
              Score:0},  
              {Course_Name:"Php",
              Score:0},               
        ]
      },
       {
        ID_student: "223344",
        Name: "LVToan",
        Courses:[{
          Course_Name:"JS",
          Score:0},  
          {Course_Name:"R",
          Score:0},  
          {Course_Name:"Php",
          Score:0},               
    ]
      },
       {
        ID_student: "543211",
        Name: "NTDung",
        Courses:[{
          Course_Name:"JS",
          Score:0},  
          {Course_Name:"R",
          Score:0},  
          {Course_Name:"Php",
          Score:0},               
    ]
      }
  ];
//=====Câu 1:====
//dùng foreach để in tất cả các object trong array
console.log('Câu 1:')
   _Class.forEach(student => {
        console.log(student)
  });

// dùng strungify
console.log('dùng stringify:')
  const String_JSON = JSON.stringify(_Class)
  console.log(String_JSON)

//=====Câu 3:====
console.log('phát sinh điểm cho mỗi môn của sinh viên');
controller.generate(_Class);
console.log('thêm điểm trung bình');
_Class.forEach(student=>{
    student.SroceAvg = controller.average(student.Courses);
}
);
console.log('Làm tròn điểm');
_Class.forEach(student=>{
  student.SroceAvg =controller.toRound(student.SroceAvg);
}
);

// ===Câu 5===
 
 _Class.forEach(student=>{
  slow_wait.generate(student.Courses);
}
);
//
// Kết quả thực thi 
console.log('Thông tin sinh viên sau khi thực thi tất cả các hàm')
_Class.forEach(student => {
  console.log(student)
});
  
  
  


