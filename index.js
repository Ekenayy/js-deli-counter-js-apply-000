//Accepts two parameters
//Pushes newName to end of lineArray
//Returns welcome string with interpolated newName an  position in line
//Assigns a number to a customer as opposed to taking newName
//Number will start at 0 and will increment everytime it runs
//Push the customers to the end the array
//A return statement with each one 

/* function takeANumber(lineArray, newName) {
  lineArray.push(newName);
  return `Welcome, ${newName}. You are number ${lineArray.length} in line.`;
} */ 

let newNumber = 0

function takeANumber(lineArray) {
var newNumber = newNumber++; 
lineArray.push(newNumber);
return `Welcome! You are number ${newNumber} in line`
}

//Accepts current line
//Creates local variable  
//Sets conditionals to determine contents of local variable
//Returns local variable 
function nowServing(lineArray) {
  var deliWords = []; 
  if (lineArray.length === 0) {
    deliWords = "There is nobody waiting to be served!";
  } else {
    deliWords = `Currently serving ${lineArray[0]}.`; 
    lineArray.shift();
  }
    return deliWords
}
 
//Accepts the lineArray as a parameter 
//Creats a local variable newDeli 
//Sets conditionals to determine contents of newDeli
  // If the line isn't empty, it iterates over the lineArray 
// Returns the local variable newDeli to tell people their place in line 
function currentLine(lineArray) {
  var newDeli;
  if (lineArray.length === 0) { 
   return "The line is currently empty.";
  } else {
    newDeli = "The line is currently: ";
      for (let i = 0; i < lineArray.length; i++) {
        if (i === 0){ 
    newDeli = newDeli + (i + 1) + ". " + lineArray[i];
  } else {
        newDeli = newDeli + ", " + (i + 1) + ". " + lineArray[i]; 
      }
    }
   return newDeli;
  }
}