/*------RANDOM CODES ----------*/

//function to generate conbination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for (i=1; i <= 8; i++) {
    var char = Math.random()* str.length; //random selecy a character from the variable and then stroe in a new variable
    code += str.charAt(char) //accumulate the generated character into a string of 8 characters   
    }
    return code;//return the final accumpated string when loop ends
}

    //Get HTML element to display
    document.getElementById("codes").innerHTML = generateCode();