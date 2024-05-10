export class LocalStorage<T> {
  private key: string;
  private storage: Storage;

  constructor(key: string, storage = localStorage) {
    this.key = key;
    this.storage = storage;
  }

  getItem() {
    return JSON.parse(this.storage.getItem(this.key) || 'null') as T;
  }

  setItem(data: T) {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  clear() {
    this.storage.removeItem(this.key);
  }
}

export const tokenStorage = new LocalStorage('token');
export const participantIdStorage = new LocalStorage('participantId');
