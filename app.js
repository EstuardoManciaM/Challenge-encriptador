let letra = 0;
function EncriptarTexto() {
    let texto = [];
    let textoSalida = "";
    let textoUsuario = document.getElementById("textoEncriptado").value;

    for (letra = 0; letra < textoUsuario.length; letra++) {
        texto.push(textoUsuario.charAt(letra));
        if (texto[letra] == "a") {
            texto[letra] = "ai";
        } else if (texto[letra] == "e") {
            texto[letra] = "enter";
        } else if (texto[letra] == "i") {
            texto[letra] = "imes";
        } else if (texto[letra] == "o") {
            texto[letra] = "ober";
        } else if (texto[letra] == "u") {
            texto[letra] = "ufat";
        }
    }
    textoSalida += texto;
    return (console.log(textoSalida.replaceAll(",", "")));
}
EncriptarTexto();



function DesencriptarTexto() {
    let textoSalida = "";
    let textoUsuario = document.getElementById("textoEncriptado").value;


    textoSalida += textoUsuario.replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    console.log(textoSalida);
}

DesencriptarTexto();