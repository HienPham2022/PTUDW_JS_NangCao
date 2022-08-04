var random_score = require('./21880038_Ex02');
var Ex03_StudentController = {
    generate:function(list){
        list.forEach(student => {
            student.Courses.forEach(Lesson=>{
                Lesson.Score = random_score(0,10);
            })             
        });        
    },
    average:function(list){
        let sum =0;
        let count =0;
        list.forEach(_Course=>{
            sum += _Course.Score;
            count++;
        });
        let agv = sum/count;
        return agv;
    },
    toRound:function(x){
        return x.toFixed(2);
    }
};
module.exports = Ex03_StudentController;
