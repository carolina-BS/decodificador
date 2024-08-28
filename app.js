const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
// const botaoCopiar = document.querySelector('.btn_copiar');
// const titulo = document.querySelector('.desencriptar_texto_vazio');
// const paragrafo = document.querySelector('.desencriptar_texto_intrucao');




//["enter","e"], ["imes","i"],["ai","a"], ["ober","o"], ["ufat","u"]

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    removerImagemFundo();
    mensagem.value = textoEncriptado;
    textArea.value = "";
    console.log("encriptou");
}


function encriptar(stringDesencriptada){
    console.log("1");
    let matrizCodigo = [["e" , "enter"], ["i", "imes",], ["a", "ai"] , ["o", "ober"] , ["u", "ufat" ]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            console.log('1');
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            console.log('2');
        }
    }

    return stringDesencriptada;
}

function btnDesencriptar() {
    const textoDesncriptado = desencriptar(textArea.value);
    mensagem.value = textoDesncriptado;
    textArea.value = "";
    console.log("encriptou");
}


function desencriptar(stringDesencriptada){
    console.log("1");
    let matrizCodigo = [["enter","e"], ["imes" ,"i"] ,["ai","a"], ["ober","o"], ["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            console.log('1');
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            console.log('2');
        }
    }

    return stringDesencriptada;
}

function copiar(){
    mensagem.select();
    document.execCommand('copy');

}

function removerImagemFundo() {
    mensagem.style.backgroundImage = 'none';
    // botaoCopiar.style.display = 'block';
    // titulo.style.display = 'none';
    // paragrafo.style.display = 'none';
}