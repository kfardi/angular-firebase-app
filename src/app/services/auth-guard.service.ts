import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     return new Promise(
       // tslint:disable-next-line:no-shadowed-variable
       (resolve, reject) => {
         firebase.auth().onAuthStateChanged(
           (user) => {
           if (user)  {
             resolve(true);
           } else {
             this.router.navigate(['/auth', 'signin']);
             resolve(true);
           }
       }
     );
  }
);
}
}
