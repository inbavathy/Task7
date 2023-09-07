import {createSlice} from "@reduxjs/toolkit";
const initialstate={ 
    username:" ",
    email:" ",
};
export const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        setusername:(State,action)=>{
            State.username=action.payload;
        };
        setemail:(State,action)=>{
            ("inba@gmail.com")
            state.email=action.payload;
        }
    }
});
export const (setusername,setemail)=authSlice.actions;
export default authSlice.reducer;
