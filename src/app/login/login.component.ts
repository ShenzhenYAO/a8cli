/** replaced by C.5 
* import { Component } from '@angular/core';
*/

import { Component, OnInit } from '@angular/core';/**Added by C.5 */

import { Router, ActivatedRoute } from '@angular/router';/**Added by C.5 */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';/**Added by C.5 */
import { first } from 'rxjs/operators';/**Added by C.5 */

/** The following line is added by C.5, but is not seen in the Angular 8 version. It is replaced by E.6.1
 import { AuthenticationService } from '../_services' 
 */
import { AuthenticationService, AlertService } from '../_services' /**Added by E.6.1 */ 

/**the following line is seen in Augular 8 version */
/** import { AlertService, AuthenticationService } from '@/_services'; */

/**The following line was replaced by C.5
 
* @Component({ templateUrl: 'login.component.html' })
* export class LoginComponent {}

*/

/**The following block is added by C.5 */
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    /** deleted by E.6.1
    error: string;
    */
    /**Added by D.5.1, the tutorial code missing ';', deleted by E.6.1 
     success: string; 
    */

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService /**Added by E.6.1 */ 
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        /**the following if(){} added by D.5.1*/
        // show success message on registration
        if (this.route.snapshot.queryParams['registered']) {
            /**Removed by E.6.1 
            this.success = 'Registration successful';
            */
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        /**The following two lines added by D.5.1 */
        // reset alerts on submit
        /**Removed by E.6.1
        this.error = null;
        this.success = null;
        */

        // reset alerts on submit
        this.alertService.clear();/**by E.6.1  */

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    /** replaced by E.6.1
                    this.error = error;
                    */
                    this.alertService.error(error);/**by E.6.1  */
                    this.loading = false;
                });
    }
}
/**The above block is added by C.5 */