/*------RANDOM CODES ----------*/
//Create variables to store generated codes and the type of characters we want to show as codes
var btnvalue; //for button boolean value
var code = ''; //to store generated codes and initialize to empty value
var getCode = ''; //to store entered code
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
//create variable to hold the type of characters we want to show as codes


//function to generate conbination of characters
function generateCode() {

    //Generate character multiple times using a loop
    for (i=1; i <= 8; i++) {
        var char = Math.random()* str.length; //random selecy a character from the variable and then stroe in a new variable
        code += str.charAt(char) //accumulate the generated character into a string of 8 characters   
    }

    return code;//return the final accumpated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();


//Disable Button 

//determine when to able or disable button

function disableButton(btnvalue) {

    document.getElementById("submit").disabled = btnvalue;
    if(btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color           = "rgba(255, 255, 255, 0.5)";
    } else  {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color           = "rgba(255, 255, 255, 1)";
    }

}

//Activate function
//disableButton();


// listen to input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

//run function if detected user had entered a character in textbox
function evaluateCode(){

    getCode = document.getElementById("codeentered").value; //get character entered 
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated

    if(charset1.length == charset2.length && charset1 == charset2) { //test if code entered matches the number of generated characters
        disableButton(false); // Enabled
    } else {
        disableButton(true);  // Disabled
    }


}