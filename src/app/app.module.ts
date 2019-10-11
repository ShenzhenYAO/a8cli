import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';/**by C.4*/

/** the following line was added by C.4, but replaced by 
* import { HttpClientModule } from '@angular/common/http';
*/
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; /**C.11 */

/**  used to create fake backend */
import { fakeBackendProvider } from './_helpers';/**by C.1.4*/

import { appRoutingModule } from './app.routing'; /**by B.6*/

import { JwtInterceptor, ErrorInterceptor } from './_helpers';/**by C.11*/

import { AppComponent } from './app.component';

import { HomeComponent } from './home'; /**by B.4*/
import { LoginComponent } from './login'; /**by B.4*/
import { RegisterComponent } from './register'; /**by B.4*/

import { AlertComponent } from './_components'; /**by E.5.5*/

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,/**by C.11*/
        HttpClientModule,/**by C.11*/
        appRoutingModule /**by B.6*/
    ],
    declarations: [
        AppComponent,
        HomeComponent, /**by B.4*/
        LoginComponent, /**by B.4*/
        RegisterComponent,  /**by B.4*/
        AlertComponent  /**by E.5.5*/ 
    ],
    
    /**Error of HTTP_INTERCEPTORS appears until step.. */
    providers: [ 

        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },/**by C.11*/
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },/**by C.11*/

        // provider used to create fake backend
        fakeBackendProvider /**by C.1.4*/
    ],

    bootstrap: [AppComponent]
})
export class AppModule { };