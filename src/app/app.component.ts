import { Component } from '@angular/core';

import { Router } from '@angular/router'; /**Added by C.7.1 */
import { AuthenticationService } from './_services';/**Added by C.7.1 */

@Component({ selector: 'app', templateUrl: 'app.component.html' })

/**Replaced by C.7.1 

* export class AppComponent {}

*/

/**The following is added by C.7.1*/
export class AppComponent {
    currentUser: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
/**The above is added by C.7.1 */