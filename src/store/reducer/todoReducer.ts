import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import TodoStorage from '@/services/TodoStorage.ts';
import type { Todo } from '@/types/todo.ts';

interface TodoState {
  todoList: { [id: string]: Todo };
}

const initialState: TodoState = {
  todoList: TodoStorage.getItems(),
};

const todoSlice = createSlice<TodoState, SliceCaseReducers<TodoState>>({
  name: 'todo',
  initialState,
  reducers: {
    save: (state, action) => {
      const todo: Todo = action.payload;
      state.todoList[todo.id] = todo;
      TodoStorage.saveToStorage(state.todoList);
    },
    remove: (state, action) => {
      const id: string = action.payload;
      delete state.todoList[id];
      TodoStorage.saveToStorage(state.todoList);
    },
  },
});

export const { save, remove } = todoSlice.actions;

export default todoSlice.reducer;
