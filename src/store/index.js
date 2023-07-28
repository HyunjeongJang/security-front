import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    accessToken: ''
};

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state, action){
            console.log('store 토큰 등록',action.payload)
            state.accessToken =  action.payload;
        },
        logout(state){
            state.accessToken = '';
        }
    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;


