import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employeemanagement';
  auth = false;
  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) {}

  logout() {
    this.auth = false;
  }
  changeAuth(data: any) {
    this.auth = true;
    console.log('work!');
  }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._empService.getEmployeeList();
        }
      },
    });
  }
}
