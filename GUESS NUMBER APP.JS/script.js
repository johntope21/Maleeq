function guess(){
    let userInput = document.getElementById("user").value;
    let randomNumb = Math.floor(Math.random() * 10);
    if (userInput == randomNumb){
        alert("Wow! you guessed it right. \n It was " + randomNumb);
    }else if (userInput < randomNumb){
        alert("You gueesed below my expectation '"+ randomNumb + "'. \n TRY AGAIN");
    }else if (userInput > 10){
        alert("Your guessed is Above the limit Numbers Provided")
    }else{
        alert("Your input is above my expectation '" + randomNumb + "'. \n GO AGAIN");
    }
    
}
function chk(){
    document.getElementById("user").style.backgroundColor = "wheat";
    document.getElementById("user").style.fontSize = "50px";
}
function mouse(){
    document.getElementById("kg").style.backgroundColor = "green";
    document.getElementById("kg").style.padding = "30px 45px";
    document.getElementById("kg").style.width = "50%";
}