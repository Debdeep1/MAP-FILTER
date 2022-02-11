// MAP loops through the values and assigns them with specific funtionality
var num=[1,2,3,4,5];

const newNum=num.map(function (x){ return x*2; });

// FILTER -- checks which condition is true and returns it

const newnumber=num.filter(function (x){ return x>2; });

//REDUCE reduces and expression to the minimum

const newnumBer=num.reduce(function(accumulator, currentNum){return accumulator+currentNum;});

//FIND
const FindNum=num.find(function(x){return x>3;});


//FINDINDEX

const FindIndexNum=num.findIndex(function(x){return x>3;});

