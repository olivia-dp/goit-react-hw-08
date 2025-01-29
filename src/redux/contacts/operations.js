import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from '../auth/operations';




export const fetchContacts = createAsyncThunk (
    "contacts/FetchAll", async ( _, thunkAPI) => {
        try {
            const {data} = await goitApi.get("/contacts");
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteThunkContact = createAsyncThunk (
    "contacts/deleteContact", async (id, thunkAPI) => {
        try {
            const {data} = await goitApi.delete(`/contacts/${id}`);
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addThunkContact = createAsyncThunk(
    "contacts/addContact", async(body, thunkAPI) =>{
        try {
            const {data} = await goitApi.post("/contacts", body);
    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)