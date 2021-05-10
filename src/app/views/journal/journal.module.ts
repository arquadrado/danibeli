import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { JournalComponent } from './journal.component';
import { JournalRoutingModule } from './journal-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, JournalRoutingModule],
  declarations: [JournalComponent],
})
export class JournalModule {}
