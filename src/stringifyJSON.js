// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //input:anything
  //output: stringified version of the input
  //assumptions: always return a string 
  //edgeCases: no functions

  //singular values 
  //check for:
  //str
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  //num
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {

    return '' + obj;
    //boolean
  }
    

  //condition for Arrays 
  if (Array.isArray(obj)) {
    var container = [];
    for (var i = 0; i < obj.length; i++) {
      container.push(stringifyJSON(obj[i]));
    }
    return '[' + container.join(',') + ']';
  }
  //create container
  //iterate through array
  //stringify each element 
  // push '[' + container + ']';

  //conditions for obj
  if (typeof obj === 'object') {
    var holder = [];
    for (var key in obj) {
      if (typeof key === 'function' || typeof obj[key] === 'function' || key === undefined || obj[key] === undefined) {
        continue;
      }
      holder.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); 
    }
    return '{' + holder.join(',') + '}';
  }
  
  //create container 
  //iterate through obj
  //check if func or undefined
  //if it is, skip over 
  //stringify key and : value
  //push '{' + container + '}'

//null

  
};
