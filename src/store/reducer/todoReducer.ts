import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoStorage from '@/services/TodoStorage.ts';
import type { Todo } from '@/types/todo.ts';

interface TodoState {
  todoList: { [id: string]: Todo };
}

const initialState: TodoState = {
  todoList: TodoStorage.getItems(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      state.todoList[todo.id] = todo;
      TodoStorage.saveToStorage(state.todoList);
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state.todoList[id];
      TodoStorage.saveToStorage(state.todoList);
    },
  },
});

export const { save, remove } = todoSlice.actions;

export type { TodoState };
export default todoSlice.reducer;
