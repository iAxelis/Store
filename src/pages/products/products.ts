import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProduct } from '../NewProduct/NewProduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NewProduct],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  // Estado reactivo para saber si el modal está abierto o cerrado
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
