// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var memo = "";

  if(Array.isArray(obj)){  // Array 
  	var result = "[";
  	var elements = obj.reduce(function(retVal, item){
  		retVal += stringifyJSON(item);
  		retVal +=",";
  		return retVal;
  	},"");
  	result += elements;
  	if(result === "[") { result += "]"; }
  	memo += result.slice(0,-1).concat("]");

  } else {

  	var x = typeof(obj);
  	switch(x){
  		case("string"):
  		 memo+= '\"'.concat(String(obj),'\"');
  		 break;
  		case("boolean"):
		case("number"):
		  memo += String(obj);
		  break;
  		default:
  		memo += objectHelper(obj);
  	}
  }

  function objectHelper(obj){
  	if (obj === null){ return "null"; }
  	var result = "{";
  	for(var key in obj){
  		if ( typeof(obj[key]) !== "undefined" && typeof(obj[key]) !== "function"){
    		var keyVal = "\"".concat(String(key),"\":");
    		var val  = stringifyJSON(obj[key]);
    		result = result.concat(keyVal, val, ",");
      }
  	}
  	if(result === "{") { result += "}"; }
  	result = result.slice(0,-1).concat("}");
  	return result;
  }

  return memo;
};