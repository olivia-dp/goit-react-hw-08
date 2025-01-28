import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.goit.global/"

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };


export const loginUser = createAsyncThunk(
    "users/login", async ( body, thunkAPI) => {
        try {
            const {data} = await axios.post("/users/login", body);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const SignUpUser = createAsyncThunk(
    "users/signup", async (body, thunkAPI) => {
        try {
           const {data} = await axios.post("users/signup", body);
           setAuthHeader(data.token);
           return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const LogOutUser = createAsyncThunk(
    "users/logout", async (_, thunkAPI) => {
        try {
        await axios.post("users/logout");
        clearAuthHeader() 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)