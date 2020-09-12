import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  public contacts = [];

  constructor(public contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContact().subscribe((response) => {
      this.contacts = response as [];
    });
  }

  edit(id) {
    this.router.navigate([`/contact/${id}/edit`]);
  }

  delete(id: number) {
    this.contactService.deleteContact(id).subscribe((contact) => {
      this.contact = new ContactModel();
      this.getContacts();
    });
  }
}
