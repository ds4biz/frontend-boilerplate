import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ExampleState {
  value: Todo[] | null;
}

const initialState = {
  value: null,
} as ExampleState;

export const examplesStore = createSlice({
  name: 'examples',
  initialState,
  reducers: {
    getDataSuccess(state, action: PayloadAction<Todo[]>) {
      console.log('Action:', action);
      state.value = action.payload;
    },
  },
});

export const { getDataSuccess } = examplesStore.actions;
