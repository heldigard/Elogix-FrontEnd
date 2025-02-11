import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor() {}

  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, environment.TOKEN_SECRET_KEY).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(
      txtToDecrypt,
      environment.TOKEN_SECRET_KEY,
    ).toString(CryptoJS.enc.Utf8);
  }

  decodeToken(token: string): any {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
