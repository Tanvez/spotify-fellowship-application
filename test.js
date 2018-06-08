const assert = require('assert')

const sortByString = require('./questionOne')
const decodeString = require('./questionTwo')
const changePossibilities = require('./questionOne')

describe('Spotify Fellowship Question tests', function (){
  
    describe.only('Question 1 - sortByStrings function', function(){
      it('when s = "weather" length is shorter than length of t="therapyw"', function (){
        assert.equal(sortByString('weather', 'therapyw'),'theeraw')
      })
      it('when s = "good" length is longer than length of t="odg"', function (){
        assert.equal(sortByString('good', 'odg'),'oodg')
      })
    })
  
  describe.only('Question 2 - decodeStrings function', function (){
    it('For s="4[ab]" the output should be "abababab"', function(){
      assert.equal(decodeString("4[ab]"), "abababab")
    })
    it('For s="2[b3[a]]" the output should be "baaabaaa"', function(){
      assert.equal(decodeString("2[b3[a]]"), "baaabaaa")
    })
  })
  //   it('Question 3 - changePossibilities function', function(){
  
  //   })
  // })


})