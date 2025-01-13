var messageArea= document.getElementById("text")
var button = document.getElementById("btn")
var messageDiv = document.getElementById("Messagebox");


var valid= "Helloworld"

function success (){
    var message= document.getElementById("text")
    var entertext = messageArea.value;

    if( valid && entertext){
        messageDiv.textContent =alert ("【﻿ｗｅｌｌｃｏｍｅ】");
        messageDiv.style.color="white"
        messageDiv.style.fontSize="20px"
        
    }else{
messageDiv.textContent=alert("Invalid")
    }
    
}

button.addEventListener("click",success)