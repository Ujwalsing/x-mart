import { Pipe, PipeTransform } from '@angular/core';
import { TableForPipeService } from './Services/tableforpipe.service';
import { Profile } from './profile';


@Pipe({
  name: 'filterProfileData',
  pure: false
})
export class FilterPipe implements PipeTransform {
 
  transform(data: Profile[], filterText: string) {
    console.log("Filter pipe called!");
    if(data.length === 0 || filterText === ''){
      return data;
    }else {
      const filteredData = data.filter((d: Profile) => d.Gender.toLowerCase().includes(filterText.toLowerCase()))
      return filteredData;
    }
  }

}
