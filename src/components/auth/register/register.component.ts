import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        CommonModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatButtonModule, 
        MatIconModule,
        MatDividerModule,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class RegisterComponent {

    hide = signal( true );
    clickEvent( event: MouseEvent ) {
        this.hide.set( !this.hide() );
        event.stopPropagation();
    }
    
}
