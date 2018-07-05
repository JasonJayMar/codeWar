function abbrevName(name){
  var array = name.split(" ");
  var firstLetter = array[0].charAt(0)
  var secondLetter = array[1].charAt(0)
  return firstLetter.toUpperCase() + "." + secondLetter.toUpperCase()
}
