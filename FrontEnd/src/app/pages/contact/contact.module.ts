import { ContactEditComponent } from './contact-form/edit/contact-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactNewComponent } from './contact-form/new/contact-new.component';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'new', component: ContactNewComponent },
  { path: ':id/edit', component: ContactEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatInputModule,
  ],
  declarations: [ContactComponent, ContactNewComponent, ContactEditComponent],
  exports: [RouterModule],
})
export class ContactModule {}
