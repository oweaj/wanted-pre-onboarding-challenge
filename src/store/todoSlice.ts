import { createSlice } from '@reduxjs/toolkit';

const initialState: { todoList: string[] } = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action) {
      state.todoList.push(action.payload);
    },
    remove(state, action) {
      state.todoList.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
