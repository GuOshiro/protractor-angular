import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

import { LoadingService } from "./loading.service";

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor{

    constructor(private loadingService: LoadingService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | 
        HttpHeaderResponse | 
        HttpProgressEvent | 
        HttpResponse<any> | 
        HttpUserEvent<any>> {

            return next
                .handle(req)
                .pipe(tap(event => {
                    if(event instanceof HttpResponse) {
                        this.loadingService.stop();
                    } else {
                        this.loadingService.start();
                    }
                }))
                .pipe(catchError(err => {
                    this.loadingService.stop();
                    throw err;
                }));
    }
}
