const decodeString=(s)=>{
  let multiply = []
  let strArray = []
  let strHolder =''
  //for loops start at the end so that the strArray can be built in order of operations
  for(let sIdx = s.length-1; sIdx >= 0; sIdx--){
    let currentChar = s[sIdx]
    // keeps track of whether the brackets are open or closed
    let open = false
    // if it is not a number do not push to multiplier array
    if(!isNaN(+currentChar)){ 
      multiply.push(currentChar) 
    } else if (currentChar==='[') {
      strArray.push(strHolder)
      strHolder =''
    } else if (currentChar!==']') {
        strHolder=currentChar+strHolder
    }
  }

  if(multiply.length===1){
    return multiplyHelper(multiply[0], strArray[0] )
  } else {
    let result = multiplyHelper(multiply[0], strArray[0] )
    for(let k = 1; k < strArray.length; k++) {
      // adds a new character to the front of result and then passes it into the helper funct
      result = multiplyHelper(multiply[k],strArray[k]+result)
    }
    return result
  }
  throw new Error('invalid entry')
}
// helper function to create the string according to the multiplier
function multiplyHelper (mult, str) {
  let result = ''
  for(let i = 0; i < mult; i++){
    result+=str
  }
  return result
}

module.exports = decodeString