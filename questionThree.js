const changePossibilities = (amount, changeArray)=>{
  let possibilityArray = createArray(amount+1, 0)
  possibilityArray[0]= 1
  //creates an array of possibilities for each amount up to the target amount
  //idx =  [0,1,2,3,4]
  //values=[1,0,0,0,0] 
  for(let changeIdx = 0; changeIdx<changeArray.length; changeIdx++){
    let change = changeArray[changeIdx]
    for(let possibilitiesIdx = change; possibilitiesIdx <= amount; possibilitiesIdx++ ){
      let remainder = possibilitiesIdx-change
      //keeps track of remainders so we remember if there was already a possible combination we've already seen for that remainder amount
      possibilityArray[possibilitiesIdx] += possibilityArray[remainder]
    }
  }
  return possibilityArray[amount]
}
const createArray = (size, fillWithAmt)=>{
  let newArr = []
  for(let i = 0; i<= size; i++){
    newArr.push(fillWithAmt)
  }
  return newArr
}

module.exports = changePossibilities
