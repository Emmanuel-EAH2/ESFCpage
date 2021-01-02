import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from "@angular/material/tooltip";

const MaterialComponents =[
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
