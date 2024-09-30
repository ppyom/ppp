import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '@/store/reducer/scheduleReducer.ts';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});

export default store;
