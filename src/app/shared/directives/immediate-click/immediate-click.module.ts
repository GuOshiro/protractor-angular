import { NgModule } from "@angular/core";
import { ImmediateClickDirective } from "./immediate-click.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ImmediateClickDirective],
    exports: [ImmediateClickDirective],
    imports: [CommonModule]
})
export class ImmediateClickModule { }