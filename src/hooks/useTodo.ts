import { useDispatch, useSelector } from 'react-redux';
import { remove, save } from '@/store/reducer/todoReducer.ts';
import type { RootState } from '@/store/reducer';
import type { Todo } from '@/types/todo.ts';

const useTodo = (id?: string) => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  const getTodo = (): Todo | never => {
    if (!id || !todoList[id]) {
      throw new Error('올바른 아이디를 입력해주세요.');
    }
    return todoList[id];
  };
  const handleSaveTodo = (todo: Todo) => {
    dispatch(save(todo));
  };
  const handleRemoveTodo = () => {
    id && dispatch(remove(id));
  };

  return {
    todoList,
    getTodo,
    handleSaveTodo,
    handleRemoveTodo,
  };
};

export default useTodo;
