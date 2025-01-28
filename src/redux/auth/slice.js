import { createSlice } from "@reduxjs/toolkit";
import { loginUser, LogOutUser, SignUpUser } from "./operations";

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
        .addCase(LogOutUser.fulfilled, (state) => {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        })
    }

}
)

export default slice.reducer;