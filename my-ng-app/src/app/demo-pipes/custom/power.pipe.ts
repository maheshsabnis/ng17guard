import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: true
})
export class PowerPipe implements PipeTransform {
// Parameter 1: value: The Value on which the Transformation is performed
// Parameter 2: arguments, type of transformation to be performed
  transform(value: number, exponent = 1): number {
    // Your Logic here
    // Search from Array
    // COnvert the String into word case (First character of each word must be in upper case)
    return Math.pow(value, exponent);
  }

}
