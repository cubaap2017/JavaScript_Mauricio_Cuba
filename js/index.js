window.onload =function(){
pantalla = document.getElementById("display");
}

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
    console.log("---------------FUNCION NUMERO----------------");
    //console.log("Valor de la coma:   " +coma);
    //console.log("Valor de xi:   " +xi);
    //console.log("Valor de la x de entrada:   " +x);
    if (x=="0" || xi==1 ) {     // inicia un nro,
      pantalla.innerHTML= xx;   // muestra el nro en pantalla
      x=xx;                     // para guardar el nro
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
          pantalla.innerHTML=x;
        }
        // Otros casos escribe numero del 0 al 9:
        else {
          var str = x;              // variable aux para contar los digitos de x
          var n = str.length+1;     // cuenta los digitos de x y guarda en n
          //console.log("Valor de digitos:    " +n);
          if (n<=8) {
            pantalla.innerHTML+=xx;
            x+=xx;
          }
          else {
            console.log("Valor de digitos maximo es de 8... no van mas!!!");
            pantalla.innerHTML=x;
          }
        }
      }
        xi=0;  // nro está iniciado y se puede ampliar
        //console.log("Valor de x:   " +x);
        //console.log("Valor de xx:   " +xx);
  },

  operar: function (s) {
    console.log("---------------FUNCION OPERAR----------------");
    this.igualar();  // si hay op pendientes se hacen primero
    ni=x;            // se pone el 1er nro en "espera" para poder escribir un 2do nro
    op=s;            // guardamos tipo op
    xi=1;            // inicializa display para proseguir con otro operando
    coma=0;
    console.log("valor de la operacion:   " +op);
    console.log("valor del primer operando:   " +ni);
  },

  igualar: function () {
    if (op=="no") {             // sin op pendiente
      pantalla.innerHTML="0";	// se muestra pantalla vacia
    }
    else {            // existe op pendiente p resolver
      sl=ni+op+x;    // op en una cadena Nro en espera , op pendiente , segundo operando
      console.log("---------------FUNCION IGUALAR----------------");
      //console.log("valor de ni input:   " +ni);
      //console.log("valor de op:   " +op);
      //console.log("valor de x:    " +x);
      //console.log("valor de sl:    " +sl);
      sol=eval(sl);  // convierte la cadena a codigo y resuelve
      //console.log("valor de sol:    " +sol);
      pantalla.innerHTML=sol.toPrecision(6);  // se muestra resultado de 6 cifras
      ni=sol;
      //console.log("valor de ni output:   " +ni);
      // x=sol;         // resultado guardado
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
      ni=0;                 // flag nro oculto a 0
      op="no";              // op en curso borrada
  },

  opuest: function () {
      nx=Number(x);         // convertir en número
      nx=-nx;
      x=String(nx);         // volver a cadena
      pantalla.innerHTML=x;
  },
}
