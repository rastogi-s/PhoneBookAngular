import {Component, OnInit} from '@angular/core';
import {Contact} from '../../models/contact.model.client';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();
  pattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
  }

  addContact() {
    this.contactService.createContact(this.contact).then(contact => {
      this.router.navigate(['/home/list']);
    });

  }

}
