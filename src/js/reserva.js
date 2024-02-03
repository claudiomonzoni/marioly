import moment from "moment";


const paseo = document.getElementById("paseo");
const transporte = document.getElementById("transporte");
const nombre = document.getElementById("nombre");
const pasajeros = document.getElementById("pasajeros");
const llegada = document.getElementById("llegada");
const salida = document.getElementById("regreso");
const btncotizar = document.getElementById("enviar");


//user agent
const ua = navigator.userAgent;

//si es cel app si es pc web.app
const enviar = (e) => {
  e.preventDefault();


  if (
    paseo.value === "" ||
    trans.value === "" ||
    nombre.value === "" ||
    pasajeros.value === "" ||
    salida.value === "" ||
    regreso.value === "" 
  ) {
    console.log("vacio");
  } else {
    btncotizar.classList.remove("desactivado");
  }
  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = "https://api.whatsapp.com/send/?phone=5217551311843&text=";
  } else {
    whats = "https://web.whatsapp.com/send/?phone=5217551311843&text=";
  }


  envio( whats, llegada.value, salida.value);
};

const envio = ( whats, llegada, salida) => {

  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20marioly.com,%20deseo%20cotizar:%0aNombre:%20${nombre.value}%0aTour:%20${paseo.value},%0aNo.%20de%20pasajeros:%20${pasajeros.value},%0aTipo%0de%0transporte:%0${trans.value}%20%0aFecha%20del%20viaje:%20${llegada}%0aFecha%20de%20regreso:%20${salida}
  %0aComentarios:%20
  `;

  btncotizar.href = url;
  
};

paseo.addEventListener("focusout", enviar);
trans.addEventListener("focusout", enviar);
nombre.addEventListener("focusout", enviar);
pasajeros.addEventListener("focusout", enviar);
llegada.addEventListener("focusout", enviar);
salida.addEventListener("focusin", enviar);