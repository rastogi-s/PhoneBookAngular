import {Injectable} from '@angular/core';
import {Contact} from '../models/contact.model.client';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to perform CRUD on contacts.
 *
 * @author Shubham Rastogi
 */
export class ContactService {
  url: string;
  urlFindById: string;
  urlFindByFirstName: string;
  urlFindByLastName: string;
  urlFindByEmail: string;
  urlFindByPhone: string;

  constructor() {
    this.url = 'https://yellowpagesapp.herokuapp.com/api/contact';
    this.urlFindById = '/id/';
    this.urlFindByFirstName = '/firstname/';
    this.urlFindByLastName = '/lastname/';
    this.urlFindByEmail = '/email/';
    this.urlFindByPhone = '/phone/';
  }

  /**
   * Create a new contact.
   *
   * @param contact new contact.
   */
  createContact(contact: Contact) {
    console.log(contact);
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(contact),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }

    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Find all contacts.
   */
  findAllContacts() {
    return fetch(this.url, {
      method: 'GET',
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Find contact by id.
   * @param contactId the contact id.
   */
  findContactById(contactId: string) {
    return fetch(this.url + this.urlFindById + contactId).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Update the contact
   *
   * @param contactId the contact id
   * @param contact the modified contact.
   */
  updateContact(contactId: string, contact: Contact) {
    return fetch(this.url + '/' + contactId, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Delete the given contact.
   * @param contactId the given contact id.
   */
  deleteContact(contactId: string) {
    return fetch(this.url + '/' + contactId, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Delete all contacts.
   */
  deleteAllContacts() {
    return fetch(this.url, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }


}
