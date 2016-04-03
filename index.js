exports.sanitize = function(word){
  // console.log('mocha running');
  return word.toLowerCase().replace(/-/g,' ');
}

exports.tokenize = function (sentence) {
   return sentence.split(' '); 
}