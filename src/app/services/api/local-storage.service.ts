import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private setLocalStorageValue(storageKey: string, storageValue: string) {
    window.localStorage[storageKey] = storageValue;
  }

  private getLocalStorageValue(storageKey: string): string {
    return window.localStorage[storageKey];
  }

  private deleteLocalStorageValue(storageKey: string) {
    window.localStorage.removeItem(storageKey);
  }

  getToken(): string {
    return this.getLocalStorageValue('bricksToken');
  }

  setToken(token: string) {
    this.setLocalStorageValue('bricksToken', token);
  }

  destroyToken() {
    this.deleteLocalStorageValue('bricksToken');
  }

}
