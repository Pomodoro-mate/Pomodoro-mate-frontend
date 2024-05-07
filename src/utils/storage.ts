export class LocalStorage<T> {
  private key: string;
  private value: Storage;

  constructor(key: string, value = localStorage) {
    this.key = key;
    this.value = value;
  }

  getItem() {
    return JSON.parse(this.value.getItem(this.key) || 'null') as T;
  }

  setItem(data: T) {
    this.value.setItem(this.key, JSON.stringify(data));
  }

  clear() {
    this.value.removeItem(this.key);
  }
}

export const tokenStorage = new LocalStorage('token');
export const participantIdStorage = new LocalStorage('participantId');
