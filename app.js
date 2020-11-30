var btnClick=document.querySelector("#btn");

var text = document.querySelector("#text-input");

var output = document.querySelector("#text-output");

 
function getURL(text){

    return "https://api.funtranslations.com/translate/pig-latin.json" + "?" +"text=" + text;
}
function errorHandler(error){
   console.log("Error has been encountered", error);
   alert("Something gone wrong. Please try again after some time");
}

function clickHandler(){
    
      fetch(getURL(text.value))
       .then(response => response.json())
       .then(json =>{
           output.innerText= json.contents.translated;
       })
       .catch(errorHandler); 
    
}



btnClick.addEventListener("click", clickHandler);