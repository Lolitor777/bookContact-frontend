import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RecordComponent } from './components/record/record.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../app/core/services/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        ContactsComponent,
        RecordComponent,
        MatTabsModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
        SharedModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    providers: [ AuthService ]
})
export default class DashboardComponent { 
    constructor(private _authService: AuthService, private router: Router ) {

    }

    logout(): void {

        this._authService.logout();
    }
 }
