import { createSlice } from '@reduxjs/toolkit';
import { Schedule } from '@/types/schedule.ts';
import ScheduleStorage from '@/services/ScheduleStorage.ts';

const initialState: { [id: string]: Schedule } = ScheduleStorage.getItems();

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    save: (state, action) => {
      const event: Schedule = action.payload;
      state[event.id] = event;
      ScheduleStorage.saveToStorage(state);
    },
    remove: (state, action) => {
      const id: string = action.payload;
      delete state[id];
      ScheduleStorage.saveToStorage(state);
    },
  },
});

export const { save, remove } = scheduleSlice.actions;
export default scheduleSlice.reducer;
