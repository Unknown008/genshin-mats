import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "numberFormat"
})

export class NumberFormatPipe implements PipeTransform {
    transform(input: number): string {
        return input.toString().replace(
            /\d(?=(?:\d{3})+$)/g, (m: string) => {
                return m + ",";
            }
        );
    }
}

@NgModule({
    imports: [],
    declarations: [NumberFormatPipe],
    exports: [NumberFormatPipe]
})
export class NumberFormatPipeModule {}