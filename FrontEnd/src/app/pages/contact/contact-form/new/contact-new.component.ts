import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from '../../contact.model';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
})

export class ContactNewComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  constructor(public contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    console.log(this.contact);
    this.contactService.saveContact(this.contact).subscribe((contact) => {
      this.contact = new ContactModel();
      this.router.navigate(['/contact']);
    });
  }
}
