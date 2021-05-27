import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipes implements PipeTransform {
  transform(value: any, limit: number, otherArg: string): any {
    if (value.length > limit) {
      return value.substr(0, limit) + "...";
    }
    return value +" "+otherArg;
  }

}
