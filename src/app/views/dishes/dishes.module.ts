import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DishesComponent } from './dishes.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [DishesComponent],
})
export class DishesModule {}
