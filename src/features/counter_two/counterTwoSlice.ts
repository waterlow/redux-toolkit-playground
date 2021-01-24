import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { increment, decrement } from '../counter/counterSlice';


const initialState = {
  value: 0,
};

export const counterTwoSlice = createSlice({
  name: 'counterTwo',
  initialState,
  reducers: {},
  extraReducers: {
    [increment.type]: state => { state.value += 2 },
    [decrement.type]: state => { state.value -= 2 }
  },
})

export const selectCountTwo = (state: RootState) => state.counterTwo.value;

export default counterTwoSlice.reducer;
