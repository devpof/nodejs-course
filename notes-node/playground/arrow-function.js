//statement syntax arrow function
var square  = (x) => {
  var result = x*x;
  return result;
};

console.log(square(9));

//expression syntax arrow function
//you can leave of the () of the x in the function
//if you only have 1 argument.
//0 arguments will still need ().
var sq = (x) => x*x;
console.log(sq(10));


//regular functions vs arrow function
//Arrow function
//-Do not bind a "this" keyword
//-Do not bind arguments array (arguments keyword)
var user = {
  name: 'Philip',
  sayHi: () => {
    //console.log(arguments); //will display different arguments
    console.log(`Hi. I'm ${this.name}`);
  },
  //ES6 different method feature
  //can see the arguments keyword for the function
  sayHiAlt () {
    console.log(arguments); //arguments object for every function
    console.log(`Hi I'm ${this.name}`);
  }
};


user.sayHi();
user.sayHiAlt(1,2,3);
