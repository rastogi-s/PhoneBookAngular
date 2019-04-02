import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../models/contact.model.client';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contact: Contact = new Contact();
  id: string;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
    });
    this.fetchContactDetails();
  }

  ngOnInit() {
  }

  fetchContactDetails() {
    this.contactService.findContactById(this.id).then(ct => {
      if (ct != null) {
        this.contact = ct[0];
      }
    });
  }

  updateContact() {
    this.contactService.updateContact(this.id, this.contact).then(contact => {
      if (contact != null) {
        document.getElementById('close').click();
        this.router.navigate(['/home/list']);
      }
    });
  }

}
