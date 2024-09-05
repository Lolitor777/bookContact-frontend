import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Contact } from '../../dashboard.type';
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
        this._dashboardService.getContactsInactive(4).subscribe({
            next: ( value: Contacts ) => {
                this.recordData = value.contacts  
            },
            error: (err) => {
                console.log( err );
            },
        })
    }
}
