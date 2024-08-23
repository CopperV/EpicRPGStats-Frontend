import { NgModule } from '@angular/core';
import { PlayerBaseComponent } from './player-base.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerBackendService } from '../_services/backend/player-backend.service';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerImageService } from '../_services/images/player-image.service';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  imports: [
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BaseChartDirective
  ],
  declarations: [
    PlayerBaseComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerSearchComponent
  ],
  exports: [
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerSearchComponent
  ],
  providers: [
    PlayerBackendService,
    PlayerImageService,
    provideHttpClient()
  ]
})
export class PlayerBaseModule { }
