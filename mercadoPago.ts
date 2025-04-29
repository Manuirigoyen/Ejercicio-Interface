import { IPago } from "./iPago";

export class MercadoPago implements IPago {
  private email: string;

  constructor(pEmail: string) {
    this.email = pEmail;
  }

  procesarPago(): void {
    console.log(`Procesando pago con MercadoPago para el usuario: ${this.email}`);
  }

  cancelarPago(): void {
    console.log("El pago con MercadoPago ha sido cancelado.");
  }

  generarRecibo(): void {
    console.log(`Recibo generado para el usuario de MercadoPago: ${this.email}`);
  }
}