import { useDispatch } from 'react-redux';
import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import scheduleReducer from '@/store/reducer/scheduleReducer.ts';
import todoReducer from '@/store/reducer/todoReducer.ts';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    todo: todoReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, undefined, AppDispatch>>();

export default store;
export { useAppDispatch };
export type { RootState, AppDispatch };
