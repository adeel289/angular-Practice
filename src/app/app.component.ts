import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

  template: `<div>
  <button class='' [ngClass] = "addClases()">My Button</button>
  <button style='color:red' type='button' [style.font-weight]="isBold?'bold':'normal'" [style.font-size.px]="fontSize">Helllo Jani</button>

  <button style="" [ngStyle] = "addStyle()">New Button</button>

  
  </div>
<div>
<table>
    <thead>
        <tr>
            <th attr.colspan="{{columnSpan}}">
                Employee Details
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>First Name</td>
            <td>{{firstName}}</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>{{lastName}}</td>
        </tr>
        <tr *ngIf='showDetails'>
            <td>Gender</td>
            <td>{{gender}}</td>
        </tr>
        <tr *ngIf='showDetails'>
            <td>Age</td>
            <td>{{age}}</td>
        </tr>
    </tbody>
</table>
<button type='button' (click)='toggleDetails()'>{{showDetails?'Hide':'Show'}} Details</button>
</div>

<div>
Two Way Data Bindings
Name : <input [value]='name' (input)='name = $event.target.value' />
                <br>
                You entered : {{name}}
<br/>
NameNG : <input [(ngModel)]='nameNG' />
                <br>
                You entered nameNG : {{nameNG}}
</div>

<list-employee></list-employee>
  `
})
export class AppComponent {
  nameNG:string="Top";
  name:string="Top";
  columnSpan: number = 2;
  firstName: string = 'Adeel';
  lastName: string = 'Shah';
  gender: string = 'Male';
  age: number = 30;
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = true;
  applyItalicClass: boolean = false;
  applyColorClass: boolean = true;

  addClases() {
    let classes = {
      colorClass: this.applyColorClass,
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicClass
    };
    return classes;
  };

  fontSize: number = 30;
  isBold: boolean = true;
  isItalic: boolean = false;

  addStyle() {
    let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,
      'border': 'solid blue 2px'
    };
    return styles;
  };

  onClick(): void {

    console.log('Employee Details Found');
  };
  showDetails: boolean = false;
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  };
}
