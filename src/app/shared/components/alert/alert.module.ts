import { Component, NgModule } from "@angular/core";
import { AlertComponent } from "./alert.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule]
})
export class AlertModule {}