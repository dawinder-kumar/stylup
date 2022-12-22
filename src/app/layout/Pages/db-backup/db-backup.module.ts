import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBBackupRoutingModule } from './db-backup-routing.module';
import { DbBackupComponent } from './db-backup/db-backup.component';


@NgModule({
  declarations: [
    DbBackupComponent
  ],
  imports: [
    CommonModule,
    DBBackupRoutingModule
  ]
})
export class DBBackupModule { }
