import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MoodsComponent } from './moods.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [MoodsComponent],
})
export class MoodsModule {}
