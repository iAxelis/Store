import { ChangeDetectionStrategy, Component,output } from '@angular/core';

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './NewProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProduct {
  onCancel = output<void>();

  cancelar() {
    this.onCancel.emit(); // Emitimos el evento
  }
}
