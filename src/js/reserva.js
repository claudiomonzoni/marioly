import moment from "moment";
// import "moment/locale/es";

// console.log(window.location.pathname);
// if(window.location.pathname === "/"){
//   import ("moment/locale/es")
//   .then((lang)=>{
//     return lang
//   })
// }

//logica de reservaciones
// const btn = document.querySelector("#enviar");

//sistema
// const h2sistema = document.querySelector("#encabezadoSistema h2");
// const imgsistema = document.querySelector("#sistema figure img");
//inputs

const paseo = document.getElementById("paseo");
const transporte = document.getElementById("transporte");
const nombre = document.getElementById("nombre");
const pasajeros = document.getElementById("pasajeros");
const llegada = document.getElementById("llegada");
const salida = document.getElementById("regreso");
const btncotizar = document.getElementById("enviar");
// const revisar = document.getElementById("revisar");

//user agent
const ua = navigator.userAgent;

//asigno Listener a cada botón

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // datosTraver(e);
//     //muestro ventana
//     // oscuro.classList.toggle("escondete");
//     // oscuro.classList.toggle("revelate");
//   });


// //obtengo datos con traversing
// const datosTraver = (elemento) => {
//   const padre = elemento.target.parentElement;
//   const h2 = padre.querySelector("h2").textContent;
//   const src = padre.querySelector("img").getAttribute("src");
//   const imagen = padre.querySelector("img");
//   //cambio en sistema la imagen y el h2
//   h2sistema.innerText = h2;
//   imgsistema.src = src;
// };

//obtengo los datos de los inputs

//si es cel app si es pc web.app
const actualizar = (e) => {
  e.preventDefault();

  console.log(paseo.value)
  if (
    paseo.value === "" ||
    // transporte.value === "" ||
    nombre.value === "" ||
    pasajeros.value === "" ||
    salida.value === "" ||
    regreso.value === "" 
  ) {
    console.log("vacio");
  } else {
    btncotizar.classList.remove("desactivado");
  }

  // const h2 = h2sistema.textContent;
  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = "https://api.whatsapp.com/send/?phone=5217551019549&text=";
  } else {
    whats = "https://web.whatsapp.com/send/?phone=5217551019549&text=";
  }
  //obtener las noches

  moment.locale("es");
  const llega = moment(llegada.value).format("dddd D MMMM YYYY");
  const sale = moment(salida.value).format("dddd D MMMM YYYY");
  const llegaObj = moment(llegada.value);
  const saleObj = moment(salida.value);
  // const noches = saleObj.diff(llegaObj, "days");
  //obtener datos de inputs y formar el mensaje
  const mensaje = `
  <hr>
  <b>Por favor revise sus datos</b>
  <hr>
Nombre: <b> ${nombre.value} </b> <br>
Tour: <b> ${tour.value} </b> <br>
Tipo de transporte: <b> ${transporte.value} </b> <br>
Numero de pasajeros: <b> ${pasajeros.value} </b> <br>
Fecha de llegada: <b> ${llega} </b> <br>
Fecha de salida: <b> ${sale} </b> <br>

`;
  // revisar.innerHTML = mensaje;
  envio( whats, llega, sale);
};

const envio = ( whats, llega, sale) => {

  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20zihuacentro.com,%20deseo%20cotizar:%0aNombre:%20${nombre.value}%0aHabitación:%20,%0aNo.%20de%20adultos:%20$,%0aNo.%20de%20niños:%20%0aFecha%20de%20Llagada:%20${llega}%0aFecha%20de%20Salida:%20${sale}
  %0aComentarios:%20
  `;

  // const urlEn = `
  // ${whats}Hi,%20I%20contact%20from%20zihuacentro.com.:%0aName:%20${nombre.value}
  // %0aRoom:%20${h2},%0aNo.%20de%20adultos:%20${adultos.value},%0aNo.%20de%20niños:%20${ninos.value}%0aFecha%20de%20Llagada:%20${llega}%0aFecha%20de%20Salida:%20${sale}
  // %0aComentarios:%20
  // `;
  
  if(window.location.pathname === "/"){
    btncotizar.href = url;
  }else{
    btncotizar.href = urlEn;
  }
  
};

nombre.addEventListener("focusout", actualizar);
// adultos.addEventListener("focusout", actualizar);
// ninos.addEventListener("focusout", actualizar);
// llegada.addEventListener("focusout", actualizar);
// salida.addEventListener("focusin", actualizar);