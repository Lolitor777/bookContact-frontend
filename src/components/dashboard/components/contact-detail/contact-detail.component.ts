import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalType } from '../../dashboard.type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { typeModal } from '../../dashboard.enum';

@Component({
    selector: 'app-contact-detail-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        RouterLink,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css'],
    // Aquí no necesitas agregar MAT_DIALOG_DATA en providers
})
export class ContactDetailComponent {

    public contactDetailForm: FormGroup;
    readonly data = inject<ModalType>(MAT_DIALOG_DATA);
    constructor(private _formBuilder: FormBuilder) {
        this.contactDetailForm = this._formBuilder.group({
            email: [this.data.contact.email, [Validators.required]],
            phone: [this.data.contact.phone_number, Validators.required],
            address: [this.data.contact.address, Validators.required],
        });
        if (this.data.typeModa != typeModal.edit ) {
            this.contactDetailForm.disable();
        }
    }
}
