import { combineReducers } from '@reduxjs/toolkit';
import scheduleReducer, {
  ScheduleState,
} from '@/store/reducer/scheduleReducer.ts';
import todoReducer, { TodoState } from '@/store/reducer/todoReducer.ts';

interface RootState {
  schedule: ScheduleState;
  todo: TodoState;
}

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  todo: todoReducer,
});

export type { RootState };
export default rootReducer;
