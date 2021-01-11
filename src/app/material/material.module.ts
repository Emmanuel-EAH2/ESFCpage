import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper'
import { MatSidenavModule } from "@angular/material/sidenav";

const MaterialComponents =[
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTableModule,
  MatExpansionModule,
  MatStepperModule,
  MatSidenavModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
