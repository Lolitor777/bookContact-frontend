export interface Contacts {
    ok:       boolean;
    contacts: Contact[];
}

export interface Contact {
    contact_id:   number;
    name:         string;
    last_name:    null;
    email:        string;
    phone_number: string;
    address:      string;
    is_active:    number;
    user_id:      number;
    createdAt:    Date;
    updatedAt:    null;
}