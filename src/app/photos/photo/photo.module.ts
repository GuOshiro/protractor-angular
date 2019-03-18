import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ PhotoComponent ]
})
export class PhotoModule { }