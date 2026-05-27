import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 👈 1. Importa RouterLink para el botón de regresar
import { NewProduct } from '../NewProduct/NewProduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NewProduct, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  // Estado reactivo con Signals
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
