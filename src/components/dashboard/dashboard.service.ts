import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environments } from '../../environments/environments';
import { Contact, Contacts, DataInactive, DeleteContacts } from './dashboard.type';

@Injectable()
export class DashboardService {

  private updateSubject = new Subject<void>();
  update$ = this.updateSubject.asObservable();

  constructor( private _http: HttpClient ) {
    
  }

  getContacs( user_id: number ): Observable<Contacts> {
    return this._http.get<Contacts> (`${environments.getContacts}${user_id}`);
  }

  getContactById( contact_id: number ): Observable<Contacts> {
    return this._http.get<Contacts> (`${environments.getContactById}${contact_id}`);
  }

  getContactsInactive( user_id: number ): Observable<Contacts> {
    return this._http.get<Contacts> (`${environments.getContactsInactive}${user_id}`);
  }

  createContact( contact: Contacts ): Observable<Contacts> {
    return this._http.post<Contacts> (`${environments.createContact}`, contact);
  }

  updateContact( contact_id: number,  contact: any ): Observable<DeleteContacts> {
    return this._http.put<DeleteContacts> (`${environments.updateContact}${contact_id}`, contact);
  }

  inactiveContact( contact_id: number,  is_active: DataInactive ): Observable<DeleteContacts> {
    return this._http.put<DeleteContacts> (`${environments.inactiveContact}${contact_id}`, is_active);
  }

  deleteContact( contact_id: number ): Observable<DeleteContacts> {
    return this._http.delete<DeleteContacts> (`${environments.deleteContact}${contact_id}`);
  }

  notifyUpdate() {
    this.updateSubject.next();
  }

  

}
