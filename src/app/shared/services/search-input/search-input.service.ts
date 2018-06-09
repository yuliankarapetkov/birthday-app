import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchInputService {
    inputValueChanged: Subject<string> = new Subject<string>()

    constructor() { }

    emitInputValueChangedEvent(input: string) {
        this.inputValueChanged.next(input);
    }
}
