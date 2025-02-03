
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from '../auth/operations';
import toast from "react-hot-toast";




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
            toast.success("Contact deleted!")
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
            toast.success("Contact added succesfully!")

    return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const editThunkContact =createAsyncThunk(
    "contacts/editContact", async ({id, name, number}, thunkAPI) => {
try {
const {data} = await goitApi.patch(`/contacts/${id}`, {name, number});
return data;
} catch (e) {
    return thunkAPI.rejectWithValue(e.message);
}
    }
)