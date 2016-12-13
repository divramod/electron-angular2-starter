import { NgModule }               from '@angular/core'
import { RouterModule }           from '@angular/router'
import { MaterialModule }         from '@angular/material'
import { CommonModule }           from '@angular/common';

// ========================== [ dm components ] ==========================
import { MenuComponent }          from './menu/menu.component'

export const SharedComponents  = [
  MenuComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    ...SharedComponents
  ],
  exports: [
    ...SharedComponents
  ]
})
export class SharedModule { }
