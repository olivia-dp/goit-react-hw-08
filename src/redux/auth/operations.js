import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
  });


const setAuthHeader = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = '';
  };


export const loginUser = createAsyncThunk(
    "users/login", async ( credentials, thunkAPI) => {
        try {
            const {data} = await goitApi.post("/users/login", credentials);
            setAuthHeader(data.token);
            
            return data;
        
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const SignUpUser = createAsyncThunk(
    "users/signup", async (credentials, thunkAPI) => {
        try {
           const {data} = await goitApi.post("users/signup", credentials);
           setAuthHeader(data.token);
           console.log(data);
           return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const LogOutUser = createAsyncThunk(
    "users/logout", async (_, thunkAPI) => {
        try {
        await  goitApi.post('users/logout');
        clearAuthHeader() 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)