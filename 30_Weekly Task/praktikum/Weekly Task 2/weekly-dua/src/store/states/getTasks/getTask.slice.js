import { createSlice } from "@reduxjs/toolkit";
import CONST from "../../../utils/contants";

const initialState = CONST.taskData;

const getTaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    actionRequestGetTask: (state) => state,
    actionRequestGetTaskInit: (state) => (state = initialState),
    // actionRequestGetTaskBySlug: (state, action) => {
    //   state = action.payload
    //     ? state.find((value) => value.slug === action.payload)
    //     : null;
    // },
  },
});

export const {
  actionRequestGetTask,
  actionRequestGetTaskInit,
  actionRequestGetTaskBySlug,
} = getTaskSlice.actions;

export default getTaskSlice.reducer;
