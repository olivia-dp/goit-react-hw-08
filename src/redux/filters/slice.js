import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    number: '' 
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
      state.number = action.payload; 
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;