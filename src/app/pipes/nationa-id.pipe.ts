import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationaID'
})
export class NationaIDPipe implements PipeTransform {
  birth: string = "";
  transform(clientID: string): string {
  this.birth = clientID.slice(0, 7);
 let day = this.birth.slice(5, 7);
 let month = this.birth.slice(3, 5);
 let year = this.birth.slice(1, 3);
  return `${day}/${month}/19${year}`
  }

}
