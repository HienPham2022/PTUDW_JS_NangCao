
var _wait = require('./21880038_Ex02');
function Ex04_SlowRandom(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(_wait(0,10)),1000);
    });
}


module.exports = Ex04_SlowRandom;


