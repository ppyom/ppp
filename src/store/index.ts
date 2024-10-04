import { useDispatch } from 'react-redux';
import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@/store/reducer';

const store = configureStore({
  reducer: rootReducer,
});

const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, any, Action>>();

export { useAppDispatch };

export default store;
