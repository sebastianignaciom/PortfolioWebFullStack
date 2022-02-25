interface Persona{
    Nombre: string;
    Apellido: string;
    Acercade: string;
    Titulos: [string, string];
}

let portfolio: Persona= {
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:["",""],
}

function GetNombre(nombre: string): void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent= nombre;
}

function GetApellido(apellido: string): string{
    const a = document.getElementById("Apellido");
    a.textContent= apellido;
    return portfolio.Apellido=apellido;
}

function GetAcercade(acercade: string): string{
    const a = document.getElementById("text_acercade");
    a.textContent= acercade;
    return portfolio.Acercade=acercade;
}

function GetTitulos(titulo1: string, titulo2: string): string{
    const a = document.getElementById("titulos");
    a.textContent= titulo1, titulo2;
    return portfolio.Titulos[0]=titulo1, portfolio.Titulos[1]=titulo2;
}

function showFile1(input): void{
    let file= input.files[0];

    let reader= new FileReader();
    reader.readAsText(file);
    reader.onload= function(progressEvent){
        var s= reader.result.toString();
        console.log(s);
        var arr= s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3],arr[4]);
    };
}