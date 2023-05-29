const avisoCSSalert = `
   color:#F90000;
   font-weight: bold;`;
const avisoCSS = `
   color: #495057;
   font-weight: 400;`;

const textosCSS = `
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   text-align: center;
   color: #495057;`;

document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
document.getElementById("btn-copiar").addEventListener("click", copiar);

function encriptar(textoDesencriptar) {
  let matrizEncriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
   
  textoDesencriptar = document
    .getElementById("textoIngresado")
    .value;

  if (textoDesencriptar.length > 0) {
    if (textoDesencriptar.match(/([áéíóúA-Z])/g) !== null) {
        document.getElementById("aviso").style.cssText = avisoCSSalert;
        document.getElementById("aviso").style.display = "block";
        sintexto();
    } else {
       for (let i = 0; i < matrizEncriptado.length; i++) {
        textoDesencriptar = textoDesencriptar.replaceAll(
          matrizEncriptado[i][0],
          matrizEncriptado[i][1]
        );
      }
      document.getElementById("inactivo").style.display = "none"; 
      document.getElementById("aviso").style.cssText = avisoCSS;
      document.getElementById("allurakid").style.display = "none";
      document.getElementById("textoResultado").style.display = "block";   
      document.getElementById("btn-copiar").style.display = "block";  
      return (document.getElementById("textoResultado").innerHTML =
        textoDesencriptar);
    }
  } else {
      document.getElementById("aviso").style.cssText = avisoCSS;
      document.getElementById("inactivo").style.display = "block"; 
      document.getElementById("textoResultado").style.display = "none";   
      document.getElementById("inactivo").style.cssText = textosCSS;
      document.getElementById("inactivo").innerText = "Recuerda \nPrimero debes ingresar un texto para encriptar o desencriptar.";
      sintexto();
  }
}

function desencriptar(textoDesencriptar) {
  let matrizDesencriptado = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  textoDesencriptar = document
  .getElementById("textoIngresado")
  .value;

if (textoDesencriptar.length > 0) {
  if (textoDesencriptar.match(/([áéíóúA-Z])/g) !== null) {
    document.getElementById("aviso").style.cssText = avisoCSSalert;
    document.getElementById("aviso").style.display = "block";
      sintexto();
  } else {
     for (let i = 0; i < matrizDesencriptado.length; i++) {
      textoDesencriptar = textoDesencriptar.replaceAll(
        matrizDesencriptado[i][0],
        matrizDesencriptado[i][1]
      );
    }
    document.getElementById("inactivo").style.display = "none"; 
    document.getElementById("aviso").style.cssText = avisoCSS;
    document.getElementById("allurakid").style.display = "none";
    document.getElementById("textoResultado").style.display = "block";   
    document.getElementById("btn-copiar").style.display = "block";  
    return (document.getElementById("textoResultado").innerHTML =
      textoDesencriptar);
  }
} else {
    document.getElementById("aviso").style.cssText = avisoCSS;
    document.getElementById("inactivo").style.display = "block"; 
    document.getElementById("textoResultado").style.display = "none";   
    document.getElementById("inactivo").style.cssText = textosCSS;
    document.getElementById("inactivo").innerText = "Recuerda \nPrimero debes ingresar un texto para encriptar o desencriptar.";
    sintexto();
}
}

function sintexto () {
   document.getElementById("btn-copiar").style.display = "none";
}

function copiar () {
   let copiarTexto = document.getElementById("textoResultado").value;
   console.log(copiarTexto);
}