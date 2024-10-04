import { Todo } from '@/types/todo.ts';

class TodoStorage {
  private static STORAGE_KEY = 'ppp--todo';
  private static items: { [id: string]: Todo } = this.getFromStorage();
  private static getFromStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  }
  static saveToStorage(items: { [id: string]: Todo }) {
    this.items = items;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
  static getItems() {
    return this.items;
  }
}

export default TodoStorage;
