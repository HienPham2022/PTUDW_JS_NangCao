var rand = require('./21880038_Ex04');
var Ex05_SlowStudentController = {
    generate:function(list){
        list.forEach(Courses=> {
            rand().then(function(resolve){Courses.Score = resolve});
        });     
    }   
}
module.exports = Ex05_SlowStudentController;