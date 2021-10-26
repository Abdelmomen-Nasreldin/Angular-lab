import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(creditCard: string ): any {
    let firstCode = creditCard.slice(0, 4);
    let secondCode =creditCard.slice(4, 8);
    let thirdCode = creditCard.slice(8, 12);
    let forthCode = creditCard.slice(12, 16);
     return `${firstCode}-${secondCode}-${thirdCode}-${forthCode}`
  }

}
