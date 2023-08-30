//I created this simple slugify instead of using npm
//This was a choice I made based on the complexity of the project
//Since we are only using simplified slugify version, we only need this code for the entire project 

//I simply import the pipe and slugify

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/\s+/g, '-'); //I change the characters to lowercase and simply replace one or more blank spaces
  }
}