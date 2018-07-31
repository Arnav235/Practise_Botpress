/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
async function yourCustomAction(state, event, params) {
  return state
}

module.exports = { 
  ConsoleLog: (state, event) => {
    console.log(event.nlu.intents[0])
    return {
      ...state
    }
  },
  
  /*
  checkNumber: (state, event) => {
   let age_type =  typeof(age) 
    console.log("@typeof -" , age_type)
    console.log("@@@age -", age)
    if (isNan(age)) {
      var ageIsInteger = false
    } else {
      var ageIsInteger = true
    }
    console.log("@@@@ageisinteger -",ageIsInteger)

    return {
      ...state,
      ageIsInteger : ageIsInteger,
      age : age, 
    }
  },
*/

checkNumber: (state,event) => { 
  strings = (event.text);

  //takes out all spaces
  strings = strings.replace(/\s/g, '')
console.log("@@@age -",strings)

//for loop to check for numbers
  for (i = 0; i < strings.length ; i++) {
    console.log(i);
    //if strings[i] is not NaN, then it is a number, and the second if statement runs
    if (isNaN(strings[i]) == false ){
       var age = parseInt(strings[i]);
       console.log("@@@age -" , age);
    // checks if the second character is a number or not
       if(isNaN(strings[i+1]) == false ) {
         age = age * 10
         age = age + parseInt(strings[i+1]);
        console.log("@@@age-" ,age);
         break;
       }
    } 

  }

  console.log("@@@age -", age)
if (isNaN(age)) {
  var noAge = true
} else {
  var noAge = false
}


  return {
    ...state,
    age : age,
    noAge: noAge,
  }
}

 }
