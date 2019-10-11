import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AuthGuard } from './_helpers'; /**Added by C.8.3 */

const routes: Routes = [
    /** the following line replaced by C.8.3
     * { path: '', component: HomeComponent },
     */
    /**The following added by C.8.3 */
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    /**The above added by C.8.3 */
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);