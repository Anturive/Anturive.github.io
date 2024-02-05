function encriptarTexto(){
    let textoUsuario = document.getElementById('textoUsuario').value;
    let textoEncriptado = "";

    if(/[^a-z\s]/.test(textoUsuario)){
        textoEncriptado = `Se detectó un texto incorrecto <br> Por favor recuerde: <br> 1. Solo letras minúsculas <br> 2. No caracteres especiales o acentos`;
    }else{
        for(let i = 0; i < textoUsuario.length; i++){
            let caracter = textoUsuario[i];
            if(caracter >= 'a' && caracter <= 'z'){
                textoEncriptado += caracter.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
            }else if(caracter == ' '){
                textoEncriptado += ' ';
            }
        }
    }

    document.getElementById('textoMostrar').innerHTML = textoEncriptado;

    if (textoUsuario != '') {
        document.getElementsByClassName('sobreponer')[0].style.display = 'none';
        document.getElementById('copiar').style.display = 'block';
    }else{
        document.getElementsByClassName('sobreponer')[0].style.display = 'block';
        document.getElementById('copiar').style.display = 'none';
    }
}

function desencriptarTexto(){
    let textoEncriptado = document.getElementById('textoUsuario').value;
    let textoDesencriptado = textoEncriptado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('textoMostrar').innerHTML = textoDesencriptado;
}

function copiarTexto(){
    let textarea = document.getElementById('textoMostrar');
    navigator.clipboard.writeText(textarea.textContent);
}
