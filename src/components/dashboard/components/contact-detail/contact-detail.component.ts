import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIconModule} from  '@angular/material/icon' ;


@Component({
    selector: 'app-contact-detail',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule
    ],
    templateUrl: './contact-detail.component.html',
    styleUrl: './contact-detail.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactDetailComponent { }
