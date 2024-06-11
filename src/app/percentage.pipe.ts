import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: any, totalNumber: number, decimal:  number) {
        console.log("percentage pipe get called...");
        
        return (value / totalNumber ).toFixed(decimal);
    }
    
}