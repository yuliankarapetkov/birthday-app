// import { Observable, SchedulerLike } from 'rxjs';
// import { fromPromise } from 'rxjs/internal/observable/fromPromise';
//
// import * as firebase from 'firebase';
//
// function staticFromThenable<T>(thenable: firebase.database.ThenableReference, scheduler?: SchedulerLike): Observable<T> {
//     const anything: any = thenable;
//     return fromPromise(anything as Promise<T>, scheduler);
// }
//
// export const fromThenable = staticFromThenable;
//
// declare module 'rxjs' {
//     namespace Observable {
//         export let fromThenable: typeof staticFromThenable;
//     }
// }