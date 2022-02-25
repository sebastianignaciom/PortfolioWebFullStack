

function cambiar_parrafo(){
document.getElementById("edit_acercaDe").style.display="block";

}

function myFunction2(valor){
    document.getElementById("text_acercade").innerText=valor;
}

// funcion para capturar el enter y que se borre el input

function logMessage(message){
    console.log(message + "<br>");
}
    
let textarea= document.getElementById("edit_acercaDe")
textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}" release [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit_acercaDe").style.display="none";
    }
});

function showFile(input) {
    var file = input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        console.log(reader.result);
        document.getElementById("text_acercaDe").innerText= reader.result;
    };
     
    reader.onerror= function(){
        console.log(reader.error);
    };
}