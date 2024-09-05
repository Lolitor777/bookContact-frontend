import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { DashboardService } from '../../dashboard.service';
import { Contact, Contacts } from '../../dashboard.type'
import { SharedModule } from '../../../../shared.module';


@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
        SharedModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
    
    contactsData: Contact[] = [];

    constructor( private _dashboardService: DashboardService ) {}

    ngOnInit(): void {
        this._dashboardService.getContacs(4).subscribe({
            next: ( value: Contacts ) => {
                this.contactsData = value.contacts
            },
            error: (err) => {
                console.log( err ); 
            }
        })
    }
}
