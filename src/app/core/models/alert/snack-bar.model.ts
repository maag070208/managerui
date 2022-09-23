import { MatSnackBarConfig } from "@angular/material/snack-bar";

export interface ISnackBar {
    config:MatSnackBarConfig<ISnackBarData>;
}

export interface ISnackBarData {
    title:string;
    message:string;
    icon:string;
    type: boolean;
    options:any
}