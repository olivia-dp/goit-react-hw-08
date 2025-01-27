import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/"


export const fetchContacts = createAsyncThunk (
    "contacts/FetchAll", async ( _, thunkAPI) => {
        try {
            const {data} = await axios.get("/contacts");
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteThunkContact = createAsyncThunk (
    "contacts/deleteContact", async (id, thunkAPI) => {
        try {
            const {data} = await axios.delete(`/contacts/${id}`);
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addThunkContact = createAsyncThunk(
    "contacts/addContact", async(body, thunkAPI) =>{
        try {
            const {data} = await axios.post("/contacts", body);
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)