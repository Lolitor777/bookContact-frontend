import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from '../../../app/core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared.module';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatButtonModule, 
        MatIconModule,
        MatDividerModule,
        SharedModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    providers: [ AuthService ]
})


export default class LoginComponent {

    email: string = '';
    password: string = '';

    constructor(private _authService: AuthService, private router: Router ) {

    }

    login(): void {

        this._authService.login(this.email, this.password).subscribe({
            next: () => {
                this.router.navigate(['/dashboard'])
            },
            error: ( err ) => alert(err.error.msg)
        })
    }

    hide = signal( true );
    clickEvent( event: MouseEvent ) {
        this.hide.set( !this.hide() );
        event.stopPropagation();
    }
    
}
