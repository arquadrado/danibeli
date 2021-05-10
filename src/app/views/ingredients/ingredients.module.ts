import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IngredientsComponent } from './ingredients.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [IngredientsComponent],
})
export class IngredientsModule {}
