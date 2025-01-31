import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logOutUser, refreshUser, SignUpUser } from "./operations";

const slice = createSlice ({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
          },
          token: null,
          isLoggedIn: false,
          isRefreshing: false,
    },
    extraReducers: builder => {
        builder
        .addCase(SignUpUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logOutUser.fulfilled, (state) => {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
          })
          .addCase(refreshUser.fulfilled, (state, action) => {
            state.isRefreshing = false;
            state.user.name= action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            
          })
          .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
          });
    }

}
)

export default slice.reducer;