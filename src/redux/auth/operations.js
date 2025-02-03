import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

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
    "auth/login", async ( credentials, thunkAPI) => {
        try {
            const {data} = await goitApi.post("/users/login", credentials);
            setAuthHeader(data.token);
            return data;
        
            
        } catch (e) {
          
             if (e.response && e.response.status === 400) {
              toast.error("Невірний логін або пароль")
              
        }
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const SignUpUser = createAsyncThunk(
    "auth/register", async (credentials, thunkAPI) => {
        try {
           const {data} = await goitApi.post("users/signup", credentials);
           setAuthHeader(data.token);
           return data;
        } catch (e) {
          if (e.response.data.code === 11000) {
            toast.error("Користувач з таким email вже зареєстрований!")
          }
          
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logOutUser = createAsyncThunk(
    "auth/logout", async (_, thunkAPI) => {
        try {
        await  goitApi.post('users/logout');
        clearAuthHeader() 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const savedToken = thunkAPI.getState().auth.token;
      
      
      if (!savedToken) {
        return thunkAPI.rejectWithValue("No token found");
      }
      
      setAuthHeader(savedToken)

      try {
        const { data } = await goitApi.get("/users/current");
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message) 
      }
    }
  );