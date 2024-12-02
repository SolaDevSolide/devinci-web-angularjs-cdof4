import {Component, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Subject} from "rxjs";

@Component({
 selector: 'app-number-edit',
 standalone: true,
 template:  '<input [(ngModel)]="value" (ngModelChange)="onInputChange()">',
 imports: [FormsModule]
})
export class NumberEditComponent {
 @Input()
 value: number = 0;
 @Output()
 valueChange = new Subject<number>();
 onInputChange() {
 this.valueChange.next(this.value);
 }
}