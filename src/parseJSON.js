// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (parseInt(json) !== NaN) {
    return parseInt(json);
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }

  if (json === 'null') {
    return null;
  }

  if (json === 'undefined') {
    return undefined;
  }

};
