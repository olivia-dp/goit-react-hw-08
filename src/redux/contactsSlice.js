import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addThunkContact, deleteThunkContact, fetchContacts } from './contactsOps';
import { selectFilter } from './filtersSlice';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  isLoading: false,
  error: false,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state, action) => {
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


export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export default slice.reducer;