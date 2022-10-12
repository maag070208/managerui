import { MatSnackBarConfig } from "@angular/material/snack-bar";

export interface ISnackBar {
    config:MatSnackBarConfig<ISnackBarData>;
}

export interface ISnackBarData {
    title:string;
    message:string;
    icon:string;
    type: MatSnackBarType;
    options:any
}
type MatSnackBarType = 'mat-primary' | 'mat-success' | 'mat-warn' | 'mat-error';
