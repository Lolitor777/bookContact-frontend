import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Contact, DataInactive, DeleteContacts } from '../../dashboard.type';
import { DashboardService } from '../../dashboard.service';
import { Contacts } from '../../dashboard.type'
import { SharedModule } from '../../../../shared.module';

@Component({
    selector: 'app-record',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
        SharedModule
    ],
    templateUrl: './record.component.html',
    styleUrl: './record.component.css',
    providers: [ DashboardService ]
})
export class RecordComponent implements OnInit {

    recordData: Contact[] = []

    constructor( private _dashboardService: DashboardService ) { }

    ngOnInit(): void {
        this.getContacts()
    }

    getContacts(): void {
        this._dashboardService.getContactsInactive(4).subscribe({
            next: ( value: Contacts ) => {
                this.recordData = value.contacts  
            },
            error: (err) => {
                console.log( err );
            },
        })
    }

    activeContact( contact_id: number ): void {

        const data: DataInactive = {   
            is_active: 1  
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

    deleteContact( contact_id: number ): void {

        this._dashboardService.deleteContact( contact_id ).subscribe({
            next: ( value: DeleteContacts ) => {
                this.getContacts();
                alert( value.msg )
            },
            error: ( err ) => {
                alert( err );
            }
        });

    }
}
