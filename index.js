let input = document.getElementById("inp");

let text = document.querySelector(".Messagebox");

function Add() {
  if (input.value == "") {
    alert("Please Enter the task");
  } else {
    let element = document.createElement("ul"); //element create karenge
    element.innerHTML = `${input.value} <span class="fa-solid">Delete</span>`;
    text.appendChild(element); //child ko append karenge khali div me
    input.value = ""; //Empty
    element.querySelector("i").addEventListener("click", remove);
    function remove() {
      element.remove();
    }
  }
}






