import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { DashboardService } from '../../dashboard.service';
import { Contact, Contacts, DataInactive, DeleteContacts } from '../../dashboard.type'
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { typeModal } from '../../dashboard.enum';


@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
        RouterLink
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contacts.component.css',
    providers: [ DashboardService ]
})
export class ContactsComponent implements OnInit {
    
    contactsData: Contact[] = [];

    constructor( private _dashboardService: DashboardService, private _dialogRef: MatDialog ) {}

    ngOnInit(): void {
        this.getContacts()
    }

    getContacts(): void {
        this._dashboardService.getContacs(4).subscribe({
            next: (value: Contacts) => {
                this.contactsData = value.contacts
            },
            error: (err) => {
                console.log( err ); 
            }
        })
    }

    inactiveContact( contact_id: number ): void {

        const data: DataInactive = {   
            is_active: 0  
        }

        this._dashboardService.inactiveContact( contact_id, data).subscribe({
            next: (value: DeleteContacts ) => {
                this.getContacts();
                alert( value.msg );
            },  
            error: ( err ) => {
                alert( err );
            }
        })    
    }

    openDialog(contact:Contact):void{
        this._dialogRef.open(ContactDetailComponent, {
            width: '800px',
            height: '700px',
            data: {
                contact: contact,
                typeModa: typeModal.view
              }
          });
    }

    openDialogEdit(contact:Contact):void{
        this._dialogRef.open(ContactDetailComponent, {
            width: '800px',
            height: '700px',
            data: {
                contact: contact,
                typeModa: typeModal.edit
              }
          });
    }
}
