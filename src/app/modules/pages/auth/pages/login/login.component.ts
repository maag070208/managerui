import {Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '@app/core/models/auth/ILogin.model';
import { IForm } from '@app/core/models/forms/IForm.model';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public showpwd: boolean = true;
  public LoginForm!: IForm<ILogin>;
  public checkForm: IForm<{ isChecked: boolean }> = new FormGroup({
    isChecked: new FormControl<boolean>(false, {
      validators: [Validators.requiredTrue],
      nonNullable: true,
    }),
  });

  constructor(
    private router:Router,
    private _authService: AuthService,
    private _alertService: AlertService,
  ) {
    this.initForm();
  }
  ngOnInit(): void { }

  initForm(): void {
    this.LoginForm = new FormGroup({
      user: new FormControl<string>('', {
        validators: [Validators.required, Validators.minLength(2)],
        nonNullable: true,
      }),
      password: new FormControl<string>('', {
        validators: [Validators.required, Validators.minLength(4)],
        nonNullable: true,
      }),
    });
  }

  async onSubmit(): Promise<void> {
    const authUser: ILogin = {
      user: this.LoginForm.controls.user.value,
      password: this.LoginForm.controls.password.value,
    };
    if (this.LoginForm.valid && this.checkForm.valid) {
      let login = await this._authService.login(authUser);
      if (login) {
        this._alertService.openSnackBar({ title: "Ok", message: "Bienvenido.", icon: "success", type: true, options: {} });
        this.router.navigate(['/home/workflow']);
      } else {
        this._alertService.openSnackBar({ title: "Error", message: "Error al iniciar sesión.", icon: "error", type: false, options: {} });
      }
    }
  }

}
