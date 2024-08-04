import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonBaseComponent } from './common-base.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerBackendService } from '../_services/backend/player-backend.service';
import { PlayerImageService } from '../_services/images/player-image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerBaseModule } from '../player-base/player-base.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerBaseModule,
    FontAwesomeModule
  ],
  declarations: [
    CommonBaseComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    PlayerBackendService,
    PlayerImageService
  ]
})
export class CommonBaseModule { }
