import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary'
})

export class Pipesumary implements PipeTransform {
    transform(value: String, ...args: any[]) {
        if (!value) {
            return null;
        }
        return value.substring(0, 50) + '......';
    }

}