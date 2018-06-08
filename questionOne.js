const sortByStrings = function (s,t){
  let result = ''
  let sObject = objectifyS(s)
  for(let tIdx = 0; tIdx<t.length; tIdx++){
    let tLetter = t[tIdx]
    //checks the object from helper function to see if it exist and adds to the result
    if(sObject[tLetter]){
      result+=sObject[tLetter]
    }
  }
return result
}
//helper function transforms string into object where keyvalue pair are {'o':'oo'} if repeats
function objectifyS (s){
  let sObject = s.split('').reduce((accumulator, currentValue)=>{
    if(!accumulator[currentValue]){
      accumulator[currentValue] = currentValue
    } else {
      accumulator[currentValue] += accumulator[currentValue]
    }
    return accumulator
  }, {})
  return sObject
}

module.exports = sortByStrings