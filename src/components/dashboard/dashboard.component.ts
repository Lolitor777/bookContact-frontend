import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RecordComponent } from './components/record/record.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import ContactDetailComponent from './components/contact-detail/contact-detail.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        HeaderComponent,
        ContactsComponent,
        ContactDetailComponent,
        RecordComponent,
        MatTabsModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export default class DashboardComponent { }
