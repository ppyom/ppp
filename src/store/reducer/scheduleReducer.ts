import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import ScheduleStorage from '@/services/ScheduleStorage.ts';
import HolidayAPI from '@/services/HolidayAPI.ts';
import { holidayToEvent } from '@/utils/schedule.ts';
import type { HolidayResponse } from '@/types/holiday.ts';
import type { Schedule } from '@/types/schedule.ts';

interface ScheduleState {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  scheduleList: { [id: string]: Schedule };
}

const initialState: ScheduleState = {
  status: 'idle',
  scheduleList: ScheduleStorage.getItems(),
};

const fetchHolidays = createAsyncThunk<
  HolidayResponse,
  { year: string },
  { state: RootState }
>('schedule/fetchHolidays', async ({ year }, thunkAPI) => {
  if (
    !Object.keys(thunkAPI.getState().schedule.scheduleList).includes(
      `${year}0101_01`,
    )
  ) {
    return await HolidayAPI.getHolidays(year);
  }
});

const scheduleSlice = createSlice<
  ScheduleState,
  SliceCaseReducers<ScheduleState>
>({
  name: 'schedule',
  initialState,
  reducers: {
    save: (state, action) => {
      const event: Schedule = action.payload;
      state.scheduleList[event.id] = event;
      ScheduleStorage.saveToStorage(state.scheduleList);
    },
    remove: (state, action) => {
      const id: string = action.payload;
      delete state.scheduleList[id];
      ScheduleStorage.saveToStorage(state.scheduleList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.status = 'succeed';
        const data = action.payload;
        console.log(data);
        if (!data) {
          //
        } else {
          const holidays = data.items.item.reduce(
            (prev, current) => ({
              ...prev,
              [`${current.locdate}_${current.dateKind}`]:
                holidayToEvent(current),
            }),
            {},
          );
          state.scheduleList = { ...state.scheduleList, ...holidays };
          ScheduleStorage.saveToStorage(state.scheduleList);
        }
      })
      .addCase(fetchHolidays.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

const { save, remove } = scheduleSlice.actions;

export { save, remove, fetchHolidays };
export default scheduleSlice.reducer;
