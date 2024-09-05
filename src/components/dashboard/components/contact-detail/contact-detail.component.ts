import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact, ModalType } from '../../dashboard.type';
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
import { DashboardService } from '../../dashboard.service';

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
    providers: [DashboardService]
})
export class ContactDetailComponent {

    typeModa = typeModal

    public contactDetailForm: FormGroup;

    readonly data = inject<ModalType>(MAT_DIALOG_DATA);

    constructor(private _formBuilder: FormBuilder, private _dashboardService: DashboardService, private _dialogRef: MatDialogRef<ContactDetailComponent>) {
        this.contactDetailForm = this._formBuilder.group({
            name: [this.data.contact.name, [Validators.required]],
            last_name: [this.data.contact.last_name, [Validators.required]],
            email: [this.data.contact.email, [Validators.required]],
            phone: [this.data.contact.phone_number, Validators.required],
            address: [this.data.contact.address, Validators.required],
        });
        if (this.data.typeModa != typeModal.edit ) {
            this.contactDetailForm.disable();
        }
    }

    editContact(id:number):void{
        const newContact = {
            contact_id: id,
            name: this.contactDetailForm.value.name,
            last_name: this.contactDetailForm.value.last_name,
            email: this.contactDetailForm.value.email,
            phone_number: this.contactDetailForm.value.phone,
            address: this.contactDetailForm.value.address
        }
        this._dashboardService.updateContact(id, newContact).subscribe({
            next: (value) => {
                this._dashboardService.notifyUpdate();
                this._dialogRef.close()
            },
            error: (err) => {

            },
            complete: () => {
                this._dashboardService.notifyUpdate();
            },
        })
    }
}
