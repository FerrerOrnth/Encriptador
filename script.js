const textoIngresado = document.querySelector(".texto-ingresado");

const textoCopiado = document.querySelector(".texto-copiado");

var signo = document.querySelector(".contenedor-imagen");

var textoSigno = document.querySelector(".contenedor-texto")


//botones

function btnCodificar() {
    const textoCodificado = codificar(textoIngresado.value)
    textoCopiado.value = textoCodificado;
    textoIngresado.value = ""
}

function btnDecodificar() {
    const textoCodificado = decodificar(textoIngresado.value)
    textoCopiado.value = textoCodificado;
    textoIngresado.value = ""
}

//Codificador

function codificar(stringCodigo) {
    
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringCodigo = stringCodigo.toLowerCase();

    if(stringCodigo == ""){
        alert("El humano no ha ingresado texto")
        document.getElementById("inicio").style.display = "";
        return "";
    }

    for(let i=0; i < codigo.length; i++){
        ocultar()
        if(stringCodigo.includes(codigo[i][0])){
            stringCodigo = stringCodigo.replaceAll(codigo[i][0],codigo[i][1])
        }
    }
    return stringCodigo;
}

//Decodificador

function decodificar(stringDecodificado) {
    ocultar()
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDecodificado = stringDecodificado.toLowerCase();

    if(stringDecodificado == ""){
        alert("El humano no ha ingresado texto")
        document.getElementById("inicio").style.display = "";
        return "";
    }

    for( let i=0; i < codigo.length; i++){
        if(stringDecodificado.includes(codigo[i][0])){
            stringDecodificado = stringDecodificado.replaceAll
            (codigo[i][1],codigo[i][0])
        }
    }
    return stringDecodificado;
}

// Ocultar

function ocultar(){
    signo.classList.add("ocultar");
    textoSigno.classList.add("ocultar");
}

// Copiar

function btnCopiar(){
  var copiado = document.getElementById("resultado");
  textoCopiado.select();
  document.execCommand('copy');
  alert("Copiado")
  
  }

// function([string1],target id)    
consoleText(['Durante eones los alienígenas hemos estado vigilando el planeta tierra. Al ver aparecer a la especie humana comenzamos a evaluar si debíamos hacer contacto...Finalmente decidimos facilitar esta herramienta a la humanidad para traducir mensajes del Español a nuestro idioma y viceversa y estar así en contacto directo y en vivo.'], 'texto');

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 6;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}
