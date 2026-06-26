import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
};
//redux nedds iunitial data empty 

// {
//   studentList:[
//     {
//       id:1,
//       name:Skillectd
//     }
//   ]
// }
const studentSlice = createSlice({
  name: "students",
  initialState,

  reducers: {
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },

    deleteStudent: (state, action) => {
      state.studentList = state.studentList.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;