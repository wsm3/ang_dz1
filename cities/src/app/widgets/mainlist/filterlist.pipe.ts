import { Pipe, PipeTransform } from '@angular/core';
import {City} from "../../shared/cities-datas";

@Pipe({
  name: 'filterlist',
})
export class FilterlistPipe implements PipeTransform {

  transform(cities:City[],filter:string): City[] {

    if(filter === undefined || !filter.length) {
      return cities;
    }

    return cities.filter((city:City)=> {
      return city.country == filter
    })
  }

}
