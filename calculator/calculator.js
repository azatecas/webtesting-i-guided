module.exports = {
  add,
};

function add(a = 0,b = 0) {
    if(isNumber(a) && isNumber(b)){
       return a + b;
    } else {
     throw new Error("Both arguments need to be numbers");
    }
}

function isNumber(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

//what can i test is the hardest question
//start iwth low hanging fruit ---> happy path (your basic assumption)
//then check for invalid input
//then move on the edge cases