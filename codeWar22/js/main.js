function findLongest(array){
  var l = '';
  for (x of array) {
    x.toString().length > l.toString().length ? l = x : l = l;
  }
  return l;
}
