import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = studentSlice.actions;
export default studentSlice.reducer;



  