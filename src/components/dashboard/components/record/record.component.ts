import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-record',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule
    ],
    templateUrl: './record.component.html',
    styleUrl: './record.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordComponent { }
