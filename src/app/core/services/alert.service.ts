import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '@app/shared/components/snack-bar/snack-bar.component';
import { ISnackBar, ISnackBarData } from '../models/alert/snack-bar.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(model:ISnackBarData) {

    const options:ISnackBar = {
      config: {
        duration: 3000,
        data: model,
        panelClass: ['mat-toolbar', model?.type ? 'mat-primary' : 'mat-warn']
      }
    }

    // {config:{duration:1000000, panelClass: ['mat-toolbar','mat-primary'], data:{title:"Error",message:"Error al iniciar sesión.",icon:"error",color:"warn",options:{}}}}

    this._snackBar.openFromComponent<SnackBarComponent>(SnackBarComponent, options.config);
  }
} 
