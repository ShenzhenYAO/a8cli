/** replaced by D.3.1
 * import { Component } from '@angular/core';
*/
import { Component, OnInit } from '@angular/core';/**added by D.3.1 */


import { Router } from '@angular/router';/**added by D.3.1 */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';/**added by D.3.1 */
import { first } from 'rxjs/operators';/**added by D.3.1 */

/**added by D.3.1, but replaced by E.7.1
import { UserService, AuthenticationService } from '../_services'; 
*/
import { UserService, AuthenticationService, AlertService } from '../_services';/**added by E.7.1 */

@Component({ templateUrl: 'register.component.html' })

/** the following replaced by D.3.1
* export class RegisterComponent {}
*/

/**the following added by D.3.1 */
@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    /**Removed by E.7.1 
    *error: string;
    */

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService /**added by E.7.1 */
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();/**added by E.7.1 */

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);/**added by E.7.1 */
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    /**removed by E.7.1
                    this.error = error;
                     */
                    this.alertService.error(error);/**added by E.7.1 */
                    this.loading = false;
                });
    }
}
/**the above added by D.3.1 */