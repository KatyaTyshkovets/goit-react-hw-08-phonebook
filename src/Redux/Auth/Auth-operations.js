import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../Services/Auth';
import { toast } from 'react-toastify';


export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch (error) {
           toast.error.message = ("Plese try again! Can't register new user whith this name and email!");
            return rejectWithValue(error.message); 
        }
    })

export const login = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.login(data);
            return result;
        } catch (error) {
           toast.error.message = ("Sorry, your name or email is incorrect! Try again!");
            return rejectWithValue(error.message);   
          }
      })

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const {status, statusText} = response;
            const error = {
                status,
                statusText,
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState()
            const result = await api.getCurrent(auth.token);
            return result;
        } catch (error) {
           toast.error.message=("Something go wrong!!! Please LogIn or Register!")
            return rejectWithValue(error.message);  
        }
    })