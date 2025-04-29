import { IPago } from "./iPago";

export class ProcesadorDePagos {
  private metodoPago: IPago;

  constructor(pMetodoPago: IPago) {
    this.metodoPago = pMetodoPago;
  }

  realizarPago(): void {
    this.metodoPago.procesarPago();
    this.metodoPago.generarRecibo();
  }

  cancelarPago(): void {
    this.metodoPago.cancelarPago();
  }
}
