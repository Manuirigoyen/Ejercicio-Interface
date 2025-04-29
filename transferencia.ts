import { IPago } from "./iPago";

export class Transferencia implements IPago {
  private banco: string;
  private numeroDeCuenta: string;

  constructor(pBanco: string, pNumeroDeCuenta: string) {
    this.banco = pBanco;
    this.numeroDeCuenta = pNumeroDeCuenta;
  }

  procesarPago(): void {
    console.log(`Procesando transferencia desde el banco ${this.banco}, cuenta N°: ${this.numeroDeCuenta}`);
  }

  cancelarPago(): void {
    console.log("La transferencia ha sido cancelada.");
  }

  generarRecibo(): void {
    console.log(`Recibo generado para la transferencia desde la cuenta N°: ${this.numeroDeCuenta} del Banco ${this.banco}`);
  }
}
