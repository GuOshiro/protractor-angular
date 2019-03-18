import { NgModule } from "@angular/core";
import { ShowIfLoggedDirective } from "./show-if-logged.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ShowIfLoggedDirective],
    exports: [ShowIfLoggedDirective],
    imports: [CommonModule]
})
export class ShowIfLoggedModule {}