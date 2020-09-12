import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContact() {
    return this.http.get('http://localhost:59989/api/contact');
  }

  getContactById(id) {
    return this.http.get(`http://localhost:59989/api/contact/${id}`);
  }

  saveContact(contact: ContactModel) {
    return this.http.post('http://localhost:59989/api/contact', contact);
  }

  updateContact(id, contact: ContactModel) {
    return this.http.put(`http://localhost:59989/api/contact/${id}`, contact);
  }

  deleteContact(id) {
    return this.http.delete(`http://localhost:59989/api/contact/${id}`);
  }
}
