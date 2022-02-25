var portfolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return portfolio.Apellido = apellido;
}
function GetAcercade(acercade) {
    var a = document.getElementById("text_acercade");
    a.textContent = acercade;
    return portfolio.Acercade = acercade;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("titulos");
    a.textContent = titulo1, titulo2;
    return portfolio.Titulos[0] = titulo1, portfolio.Titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}
