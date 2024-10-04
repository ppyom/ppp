import { useDispatch, useSelector } from 'react-redux';
import { remove, save } from '@/store/reducer/todoReducer.ts';
import type { Todo } from '@/types/todo.ts';

const useTodo = (id?: string) => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const getTodo = () => {
    return todoList[id];
  };
  const handleSaveTodo = (todo: Todo) => {
    dispatch(save(todo));
  };
  const handleRemoveTodo = () => {
    dispatch(remove(id));
  };

  return {
    todoList,
    getTodo,
    handleSaveTodo,
    handleRemoveTodo,
  };
};

export default useTodo;
