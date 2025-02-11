import { inject, Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cryptoService: CryptoService = inject(CryptoService);

  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.cryptoService.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return this.cryptoService.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
