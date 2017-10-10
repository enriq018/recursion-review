// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   //inputs: string
//   //outputs: an array of nodes
//   //assumptions: remember that nodes are array like object
//   //edge cases: if there are multiple layers then use recursion

//   //create variable storage
//   var results = [];
//   //iterate through nodes
//   var getChildNodes = function (nodes) {
//     for (var i = 0; i < nodes.length; i++) {   
//     //assign element to node
//       var node = nodes[i];
//     }
//     //condition if nodes has child nodes and childnodes has className property
//     if (node.childNode && node.childNode.className) {
//       results.push(node);
//     }
//   };
  

//   //send children of node back into function
//   getChildNodes(node);

//   getChildNodes(document.body.childNodes);

// };

var getElementsByClassName = function(className) {
  //inputs: string
  //outputs: an array of nodes
  //assumptions: remember that nodes are array like object
  //edge cases: if there are multiple layers then use recursion

  //create variable storage
  var results = [];
  //   debugger;
  //iterate through nodes
  var getChildNodes = function (nodes) {
    for (var i = 0; i < nodes.length; i++) {   
    //assign element to node
      var node = nodes[i];

      //condition if nodes has child nodes and childnodes has className property
      if (node.childNode && node.className === className) {
        results.push(node);
  
      }

      // send children of node back into function
      if (node.children) {
        getChildNodes(node);
      }
    }
    
      
  
     

  };
  

  
  getChildNodes(document.body.childNodes);

  return results;
};
