function findShort(s){
  var strSplit=s.split(" ");
  var tempWord=strSplit[0];
  var tempWordLen = tempWord.length;
  for(var i=0; i<strSplit.length; i++) {
    if (strSplit[i].length < tempWord.length) {
      tempWord = strSplit[i];
      tempWordLen = tempWord.length;
    }
  }
  return tempWordLen;
}
