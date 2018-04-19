window.onload =function(){
pantalla = document.getElementById("display");
}
/*
function acomodarDisplay(){
 var cadena = display.innerHTML;
 var numero = parseFloat(cadena);
 limite = 8;
 if (cadena.lenght>limite){
    if (numero - numero.toFixed(0) == 0){
       display.innerHTML=numero;
     }
     else {
       display.innerHTML=parseFloat(cadena).toPrecision(8)
     }
   }
 }
*/

x="0";      //nro display
xi=1;       //iniciar nro: 1=si; 0=no;
coma=0;     //coma decimal 0=no, 1=si;
ni=0;       // nro en espera
op="no";    // op en curso; no=sin operacion

var calculadora = {

  Tamanio: function(btnAnimar) {    // Para cambiar tamannio las teclas
    btnAnimar.style.transform="scale(0.9)";
    setTimeout(function(){
    btnAnimar.style.transform="scale(1)";
    },100);
  },

  numero: function(xx){           // recoge el número tecleado
       if (x=="0" || xi==1 ) {    // inicia un nro,
       pantalla.innerHTML= xx;    // muestra el nro en pantalla
       console.log("Hello from Me");
       x=xx;                      // para guardar el nro
       if (xx==".") {             // cuando hay punto al principio del nro
         pantalla.innerHTML="0.";
         x=xx;                    // guarda nro
         coma=1;                  // flag de estado de la coma 1=si
         }
       }
       else {                     // se sigue escribiendo el nro
           if (xx=="." && coma==0) {     //si escribimos coma decimal 1ra vez
               pantalla.innerHTML+=xx;
               x+=xx;
               coma=1;         // flag de estado de la coma
           }
          //si se trata de escribir una segunda coma no deja
           else if (xx=="." && coma==1) {
           }
           // Otros casos: escribir un número del 0 al 9:
           else {
               pantalla.innerHTML+=xx;
               x+=xx
           }
        }
        xi=0;  // nro está iniciado y se puede ampliar
     },

     operar: function (s) {
             this.igualar();  // si hay op pendientes se hacen primero
             ni=x;            // se pone el 1er nro en "espera" para poder escribir un 2do nro
             op=s;            // guardamos tipo op
             xi=1;            // inicializa display para proseguir con otro operando
     },

     igualar: function () {
            if (op=="no") {             // sin op pendiente
               pantalla.innerHTML="0";	// se muestra pantalla vacia
               }
            else {            // existe op pendiente p resolver
               sl=ni+op+x;    // op en una cadena Nro en espera , op pendiente , segundo operando
               sol=eval(sl);  // convierte la cadena a codigo y resuelve
               pantalla.innerHTML=sol.toPrecision(6);  // se muestra resultado de 6 cifras
               x=sol;         // resultado guardado
               // op="no";       // ya no hay op pendientes
               xi=1;          // ya se puede reiniciar display
               }
     },

     raizc: function () {
              x=Math.sqrt(x);
              pantalla.innerHTML=x.toPrecision(6); // se muestra el resultado de 6 cifras
              op="no";        // ya no hay op pendientes
              xi=1;           // ya se puede reiniciar display
     },

     borradoTotal: function () {
              pantalla.innerHTML=0; // pantalla en 0
              x="0";                // reinicia nro del display
              coma=0;               // flag de estado de la coma 0=no
              ni=0                  // flag nro oculto a 0
              op="no"               // op en curso borrada
     },

     opuest: function () {
              nx=Number(x);         // convertir en número
              nx=-nx;
              x=String(nx);         // volver a cadena
              pantalla.innerHTML=x;
     },
}
