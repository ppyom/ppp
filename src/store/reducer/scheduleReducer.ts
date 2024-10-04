import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ScheduleStorage from '@/services/ScheduleStorage.ts';
import HolidayAPI from '@/services/HolidayAPI.ts';
import { holidayToEvent } from '@/utils/schedule.ts';
import type { Schedule } from '@/types/schedule.ts';
import { HolidayResponse } from '@/types/holiday.ts';
import { RootState } from '@/store/reducer';

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
  { state: RootState; rejectValue: string }
>('schedule/fetchHolidays', async ({ year }, thunkAPI) => {
  if (
    !Object.keys(thunkAPI.getState().schedule.scheduleList).includes(
      `${year}0101_01`,
    )
  ) {
    return await HolidayAPI.getHolidays(year);
  }
  return thunkAPI.rejectWithValue('');
});

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Schedule>) => {
      const event = action.payload;
      state.scheduleList[event.id] = event;
      ScheduleStorage.saveToStorage(state.scheduleList);
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state.scheduleList[id];
      ScheduleStorage.saveToStorage(state.scheduleList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state: ScheduleState) => {
        state.status = 'loading';
      })
      .addCase(fetchHolidays.fulfilled, (state: ScheduleState, action) => {
        state.status = 'succeed';
        const data: HolidayResponse = action.payload;
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
      .addCase(fetchHolidays.rejected, (state: ScheduleState) => {
        state.status = 'failed';
      });
  },
});

const { save, remove } = scheduleSlice.actions;

export { save, remove, fetchHolidays };
export type { ScheduleState };
export default scheduleSlice.reducer;
