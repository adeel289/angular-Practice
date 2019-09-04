import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: any[] = [
    {
      code: 'emp101', name: 'Tom', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '06/25/1999'
    },
    {
      code: 'emp102', name: 'Alex', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '08/09/1982'
    },
    {
      code: 'emp103', name: 'Mike', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/08/1979'
    },
    {
      code: 'emp104', name: 'Mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '11/10/1980'
    },
    {
      code: 'emp105', name: 'Adeel', gender: 'Male',
      annualSalary: 125630, dateOfBirth: '04/12/1985'
    },
  ];

  getEmployees(): void {

    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '06/25/1999'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '08/09/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/08/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '11/10/1980'
      },
      {
        code: 'emp105', name: 'Adeel', gender: 'Male',
        annualSalary: 125630, dateOfBirth: '04/12/1985'
      },
      {
        code: 'emp106', name: 'Babri', gender: 'Female',
        annualSalary: 1000, dateOfBirth: '07/12/1965'
      },
    ];
  };

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  };
}