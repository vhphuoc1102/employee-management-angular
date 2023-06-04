import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  form: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      username: '',
      password: '',
    });
  }
  @Output() changeAuth = new EventEmitter<any>();
  submit() {
    if (
      this.form.value.username == 'admin' &&
      this.form.value.password == '1'
    ) {
      this.changeAuth.emit();
    }
    // console.log(this.form.value.username);
    // console.log(this.form.value.password);
  }
}
