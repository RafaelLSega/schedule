import { ContactModel } from './../../contact.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  private id;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.contactService.getContactById(this.id).subscribe((contact) => {
        this.contact.name = contact['name'];
        this.contact.phone = contact['phone'];
        this.contact.street = contact['address']['street'];
        this.contact.district = contact['address']['district'];
        this.contact.number = contact['address']['number'];
        this.contact.city = contact['address']['city'];
        this.contact.zipCode = contact['address']['zipCode'];
      });
    });
  }

  update() {
    this.contactService
      .updateContact(this.id, this.contact)
      .subscribe((contact) => {
        this.router.navigate(['/contact']);
      });
  }
}
