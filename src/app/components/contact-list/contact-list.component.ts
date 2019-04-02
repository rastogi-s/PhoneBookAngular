import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[];
  filterList: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
    this.findAllContacts();
  }

  ngOnInit() {
  }

  findAllContacts() {
    this.contactService.findAllContacts().then(contacts => {
      if (contacts != null) {
        this.contactList = contacts;
        this.filterList = contacts;
        contacts.sort((a, b) => {
          const nameA = a.lastname.toLowerCase();
          const nameB = b.lastname.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    });
  }

  deleteContact(id: string) {
    this.contactService.deleteContact(id).then(status => {
      if (status != null) {
        this.findAllContacts();
      }

    });
  }

  editContact(id: string) {
    this.router.navigate(['/home/update/' + id]);
    // this.contactService.(_id).
    // then(status => this.findAllContacts());
  }

  updateList(message: string) {
    console.log(' search ');
    this.filterList = this.contactList;
    if (this.contactList && this.contactList.length > 0) {

      const text = message.toLowerCase();
      console.log(text);
      const regex = new RegExp('^' + text, 'g');
      if (text.match(/^[0-9]{0,10}$/)) {
        console.log('in phone filter');
        this.filterList = this.contactList.filter(record => record.phone.toString().toLowerCase().match(regex));
      } else if (text.match(/^[a-zA-Z]*@[a-zA-Z]*$/)) {
        console.log('in email filter');
        this.filterList = this.contactList.filter(record => record.email.toLowerCase().match(regex));
      } else {
        console.log('in firstname filter');
        this.filterList = this.contactList.filter(record => record.firstname.toLowerCase().match(regex)
          || record.lastname.toLowerCase().match(regex) || record.email.toLowerCase().match(regex));
      }
    }
  }
}
