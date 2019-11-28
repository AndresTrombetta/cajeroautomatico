var dineroAExtraer;//En esta variable guardo el dinero a extraer
var stockDeBilletes=100//Se indica la cantidad de billetes en stock
var cantidadDeBilletes;
var denominacion=1000

class Billetes {
  constructor(v,c) {
    this.valor=v
    this.cantidad=c
  }
}

var caja=[];
caja.push(new Billetes(1000,100))
caja.push(new Billetes(500,100))
caja.push(new Billetes(200,100))
caja.push(new Billetes(100,100))

var botonExtraer=document.getElementById('extraer')//Obtengo el objeto HTML y lo guardo en botonExtraer
botonExtraer.addEventListener("click",entregarDinero)//Cuando hago click en botonExtraer se ejecuta la funcion entregarDinero


function entregarDinero(){//Hace el calculo de los billetes a entregar y descuenta dicha cantidad al stock inicial

  dineroAExtraer=document.getElementById('montoAExtraer').value;//Trae el valor del elemento HTML con ID montoAExtraer

  if (dineroAExtraer<denominacion) {
    alert("Ingrese multiplos de 100")

  } else {

    cantidadDeBilletes=Math.floor(dineroAExtraer/denominacion)

    var mensaje="Entregar "+cantidadDeBilletes+" Billetes de 1000"

    stockDeBilletes=stockDeBilletes-cantidadDeBilletes

    console.log(stockDeBilletes);
    console.log(mensaje);
  }


}
