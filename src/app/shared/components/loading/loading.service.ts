import { Injectable } from "@angular/core";
import { LoadingType } from "./loading-type";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class LoadingService { 

    loadingSubject = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }    
}