import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})

export default class RegisterComponent {

    name: string = '';
    email: string = '';
    password: string = '';

    constructor(private _authService: AuthService, private router: Router) { }

    createUser(): void {

        console.log(this.name, this.email, this.password);


        this._authService.createUser(this.name, this.email, this.password).subscribe({
            next: () => {
                this.router.navigate(['/login'])
            },
            error: (err) => {
                console.error(err);
            }
        })
    }

    hide = signal(true);
    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

}
