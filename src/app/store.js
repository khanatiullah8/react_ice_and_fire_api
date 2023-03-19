import characterReducer from "../features/character/characterSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
})

export default store;