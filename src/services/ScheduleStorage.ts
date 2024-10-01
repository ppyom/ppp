import { Schedule } from '@/types/schedule.ts';

class ScheduleStorage {
  private static STORAGE_KEY = 'ppp--schedule';
  private static items: { [id: string]: Schedule } = this.getFromStorage();
  private static getFromStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  }
  static saveToStorage(items: { [id: string]: Schedule }) {
    this.items = items;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
  static getItems() {
    return this.items;
  }
}

export default ScheduleStorage;
