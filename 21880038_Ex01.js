let students = [
    {
        StudentId:1,
        name: 'Nguyen Van A',
        grades: [
            {
                subject:'English',
                grade:0
            },
            {
                subject:'Math',
                grade:0
            },
            {
                subject:'Physic',
                grade:0
            }
        ]
    },
    {
        StudentId:2,
        name: 'Nguyen Van B',
        grades: [
            {
                subject:'English',
                grade:0
            },
            {
                subject:'Chemistry',
                grade:0
            },
            {
                subject:'Physic',
                grade:0
            }
        ]
    },
    {
        StudentId:3,
        name: 'Nguyen Van C',
        grades: [
            {
                subject:'English',
                grade:0
            },
            {
                subject:'Music',
                grade:0
            },
            {
                subject:'IT',
                grade:0
            }
        ]
    }
];
//****Bài 1**** 
// console.log(JSON.stringify(students));

// ****Bài 2**** 
// let random =require('./21880038_Ex02');
// console.log(random(0,10));

// ****Bài 3**** 
// let controller =require('./21880038_Ex03');
// controller.generate(students);
// console.log(JSON.stringify(students));

// controller.average(students);
// console.log(JSON.stringify(students));

// controller.normalize(students);
// console.log(JSON.stringify(students));

// ****Bài 4**** 
// let slowRandom =require('./21880038_Ex04');
// let x = slowRandom(0,10);
// slowRandom(0,10).then(x=>console.log(x));
// (async function(){
//     let x = await slowRandom(0,10);
//     console.log(x);
// })();
// ****Bài 5**** 
let slowController = require('./21880038_Ex05');
(async function(){
    await slowController.generate(students);
    console.log(JSON.stringify(students));

    slowController.average(students);
    console.log(JSON.stringify(students));

    slowController.normalize(students);
    console.log(JSON.stringify(students));    
})();


