import { createSlice } from '@reduxjs/toolkit';
import { addThunkContact, deleteThunkContact, fetchContacts } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  isLoading: false,
  error: false,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase (deleteThunkContact.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })
    .addCase ( addThunkContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })

  }
});




export default slice.reducer;