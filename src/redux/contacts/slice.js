import { createSlice } from '@reduxjs/toolkit';
import { addThunkContact, deleteThunkContact, editThunkContact, fetchContacts } from './operations';
import { logOutUser } from "../auth/operations";

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
      .addCase(deleteThunkContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(addThunkContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editThunkContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.items = [];
      })

  }
});




export default slice.reducer;