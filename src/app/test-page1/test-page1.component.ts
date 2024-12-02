import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NumberDisplayComponent } from '../number-display/number-display.component'; // Import du composant number-display
import { NumberStepsComponent } from '../number-steps/number-steps.component'; // Import du composant number-steps
import { NumberEditComponent } from '../number-edit/number-edit.component'; // Import du composant number-edit

@Component({
  selector: 'app-test-page1',
  standalone: true,
  imports: [NumberDisplayComponent, NumberStepsComponent, NumberEditComponent, FormsModule],
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {
  numberValue = 1;

  onClickIncrementValue() {
    this.numberValue++;
   }
   
   onInputChanged($event: Event) {
    console.log("input changed", $event);
    const input = <HTMLInputElement> $event.target;
    const textValue: string = input.value;
    console.log('input text value:', textValue);
    const numberValue: number = +textValue;
    console.log('input number value:', numberValue);
   }
   
   onDecr10($event: number) {
    this.numberValue -= 10;
   }
   onDecr1($event: number) {
    this.numberValue -= 1;
   }
   onIncr1($event: number) {
    this.numberValue += 1;
   }
   onIncr10($event: number) {
    this.numberValue += 10;
   }
   
}
