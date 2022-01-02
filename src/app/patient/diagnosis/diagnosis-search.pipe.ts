import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diagnosisSearch'
})
export class DiagnosisSearchPipe implements PipeTransform {

  transform(items: any[], searchTxt: string): any[] {
    //console.log(searchTxt);
    //console.log(items);
    if(!items || !items.length) return items;
    if(!searchTxt || !searchTxt.length) return items;
    return items.filter(item => {
      //console.log(item);
      return item.toLowerCase().startsWith(searchTxt.toLowerCase()) > -1
    });
  }
}
