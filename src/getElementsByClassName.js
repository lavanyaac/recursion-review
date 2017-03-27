// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var memo = [];
  // debugger;

  function getElements(elem){
    testThisElem(elem);
    
    if ( elem.hasChildNodes() ){
      var kids = elem.childNodes;
      for(var i = 0 ; i<kids.length; i++){
        getElements(kids[i]);
      }
    }

  }

  function testThisElem(thing){
  		var elemClassList = thing.classList;
      if( ( elemClassList !== undefined ) && elemClassList.contains(className) ) {
	  	  memo = memo.concat(thing);
      }
      return;
  }

  getElements(document.body);
// get an element
// does it have children
// if so recurse   memo.concat(getElementsByClassName)
// if no children, does it have any classes
// if so return it to an added memo;
return memo;

};
