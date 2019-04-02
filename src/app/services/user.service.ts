import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for user.
 * @author Shubham Rastogi.
 */
export class UserService {

  url: string;
  urlRegister: string;
  urlLoggedUser: string;
  urlUpdateProfile: string;
  urlLogin: string;
  urlPassReset: string;
  urlVerifyUsername: string;
  urlLogout: string;
  urlDeleteProfile: string;

  constructor() {
    const base = 'https://webdev-rastogi-shubham.herokuapp.com';
    // if (!location.toString().includes('localhost')) {
    //   base = 'https://webdev-rastogi-shubham.herokuapp.com';
    // } else {
    //   base = 'http://localhost:5500';
    // }
    this.url = base + '/api/user';
    this.urlRegister = base + '/api/register';
    this.urlLoggedUser = base + '/api/profile';
    this.urlUpdateProfile = base + '/api/profile';
    this.urlLogin = base + '/api/login';
    this.urlPassReset = base + '/api/reset';
    this.urlVerifyUsername = base + '/api/verify';
    this.urlLogout = base + '/api/logout';
    this.urlDeleteProfile = base + '/api/delete';
  }

  /**
   * Registers new users.
   * @param user new user obj.
   */
  register(user) {
    return fetch(this.urlRegister, {
      method: 'POST',
      body: JSON.stringify(user),
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
   * Logins the user by checking user.
   * @param username username of the user.
   * @param password password of the user.
   */
  login(username, password) {
    const obj = {
      username,
      password
    };

    return fetch(this.urlLogin, {
      method: 'POST',
      body: JSON.stringify(obj),
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
   * Logs out the user.
   */
  logout() {
    return fetch(this.urlLogout, {
      method: 'POST',
      credentials: 'include',
    });
  }

  /**
   * Finds the user who is currently logged in.
   */
  findLoggedUser() {
    return fetch(this.urlLoggedUser, {
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
   * Updates the user profile.
   * @param user new user details.
   */
  updateUserProfile(user) {
    return fetch(this.urlUpdateProfile, {
      method: 'PUT',
      body: JSON.stringify(user),
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
   * Deletes the current profile.
   */
  deleteTheCurrentProfile() {
    return fetch(this.urlDeleteProfile, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

  /**
   * Resets the password.
   * @param password the new password.
   * @param key the key for password reset.
   */
  resetPassword(password, key) {
    const obj = {
      password
    };
    return fetch(this.urlPassReset, {
      method: 'POST',
      body: JSON.stringify(obj),
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


}
