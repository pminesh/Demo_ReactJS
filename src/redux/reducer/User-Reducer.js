import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../constant/api/API';
import axios from 'axios';
import { toast } from 'react-toastify';

export const userOperation = createSlice({
    name: 'user',
    initialState: {
        data: [],
    },
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload;
        }
    },
})

// =================================USER API=================================
// get user listing API
export const getUserAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}user/user`);
        dispatch(setUserData(response.data));
    } catch (err) {
        toast.error(err['message'], {
            position: toast.POSITION.TOP_RIGHT
        });
        throw new Error(err);
    }
};

// user registration API
export const addUserAsync = (data) => async (dispatch) => {
    try {
        await axios.post(baseUrl + "user/user", data);
        dispatch(getUserAsync());
        toast.success('User registration successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    } catch (err) {
        toast.error(err['message'], {
            position: toast.POSITION.TOP_RIGHT
        });
        throw new Error(err);
    }
};

// update user API
export const updateUserAsync = (data, id) => async (dispatch) => {
    try {
        await axios.put(baseUrl + "user/user/" + id + "/", data);
        toast.success('User updated successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
        dispatch(getUserAsync());
    } catch (err) {
        toast.error(err['message'], {
            position: toast.POSITION.TOP_RIGHT
        });
        throw new Error(err);
    }
};

// user delete API
export const deleteUserAsync = (id) => async (dispatch) => {
    try {
        await axios.delete(baseUrl + "user/user/" + id + "/");
        toast.success('User deleted successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
        dispatch(getUserAsync());
    } catch (err) {
        toast.error(err['message'], {
            position: toast.POSITION.TOP_RIGHT
        });
        throw new Error(err);
    }
};
// =================================END USER API==============================

// Action creators are generated for each case reducer function
export const { setUserData } = userOperation.actions;

export const showUsers = (state) => state.user.data;

export default userOperation.reducer;