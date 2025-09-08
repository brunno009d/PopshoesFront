function validar(){
    let nombre = document.getElementById("first_name");
    let correo = document.getElementById("email");
    let verNombre = validarFull("nombre",nombre.value);
    let verCorreo = validarFull("correo",correo.value);

    if(verNombre == 1 && verCorreo == 1){
        alert("Datos correctos ");
    }
}


function validarFull(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert(`El campo ${atributo} está vacío`)
        return 0;
    }
}


function validarCampos(texto){
    if(texto.trim() == "" ){
        return 0;
    }else{
        return 1;
    }
}