import { TarjetaDeCredito } from "./tarjCredito";
import { MercadoPago } from "./mercadoPago";
import { Transferencia } from "./transferencia";
import { ProcesadorDePagos } from "./procDePagos";

let pago1 = new TarjetaDeCredito(1234567890123456);
let pago2 = new MercadoPago("messi@correo.com");
let pago3 = new Transferencia("Nación", "00123456789");


//Pruebas::

let procesador1 = new ProcesadorDePagos(pago1);
procesador1.realizarPago();

let procesador2 = new ProcesadorDePagos(pago2);
procesador2.realizarPago();

let procesador3 = new ProcesadorDePagos(pago3);
procesador3.realizarPago();

let procesador4 = new ProcesadorDePagos(pago3);
procesador4.cancelarPago();