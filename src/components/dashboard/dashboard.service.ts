import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { Contacts } from './dashboard.type';

@Injectable()
export class DashboardService {

  constructor( private _http: HttpClient ) {
    
  }

  getContacs( user_id: number ): Observable<Contacts> {
    return this._http.get<Contacts> (`${environments.getContacts}${user_id}`);
  }

  getContactById( contact_id: number ): Observable<any> {
    return this._http.get<any> (`${environments.getContactById}${contact_id}`);
  }

  getContactsInactive( user_id: number ): Observable<any> {
    return this._http.get<any> (`${environments.getContactsInactive}${user_id}`);
  }

  createContact( contact: any ): Observable<any> {
    return this._http.post<any> (`${environments.createContact}`, contact);
  }

  updateContact( contact_id: number,  contact: any ): Observable<any> {
    return this._http.put<any> (`${environments.updateContact}${contact_id}`, contact);
  }

  inactiveContact( contact_id: number,  is_active: number ): Observable<any> {
    return this._http.put<any> (`${environments.inactiveContact}${contact_id}`, is_active);
  }

  deleteContact( contact_id: number ): Observable<any> {
    return this._http.delete<any> (`${environments.deleteContact}${contact_id}`);
  }

}
