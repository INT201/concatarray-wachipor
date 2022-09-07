// const { template } = require('@babel/core')

function concatArray(array1, array2) {
  return array1+array2
}

let array1 = []
let array2 = []

if(array1==[null]||[undefined] && [array2==null]||[undefined]) {
  return 'undefined'
}
else if(array1 && array2 ==[]){
 return 'empty array'
}
else{
  return concatArray()
}

console.log(concatArray())
  

// module.exports = concatArray
