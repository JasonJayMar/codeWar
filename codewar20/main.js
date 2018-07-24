function oddOrEven(array) {
   if(!array.length) return 'even'
   let temp = array.reduce((acc, val) => {
     return acc + val
   })
   if(temp % 2 === 0){
     return 'even'
   }
   else if(temp % 2 === 0){
     return 'even'
   }
   else{
     return 'odd'
   }
}
