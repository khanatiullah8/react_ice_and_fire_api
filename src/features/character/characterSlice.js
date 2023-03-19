// =============================================================== //
// ========= Below written code is for Button Pagination ========= //
// // =============================================================== //

import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  character: [],
  error: ''
}

const fetchCharacter = createAsyncThunk('character/all', async (url) => {
  const response = await axios.get(url);
  return response.data;
})

const characterSlice = createSlice({
  name: "character",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.loading = false;
      state.character = action.payload;
      state.error = '';
    })
    builder.addCase(fetchCharacter.rejected, (state, action) => {
      state.loading = false;
      state.character = [];
      state.error = action.error.message;
    })
  }
})

export default characterSlice.reducer;
export { fetchCharacter }



















// // =============================================================== //
// // ===== Below written code is for Infinite Scroll Pagination ==== //
// // =============================================================== //

// import { createSlice } from '@reduxjs/toolkit'
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   loading: false,
//   character: [],
//   error: ''
// }

// const fetchCharacter = createAsyncThunk('character/all', async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// })

// const characterSlice = createSlice({
//   name: "character",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchCharacter.pending, (state) => {
//       state.loading = true;
//     })
//     builder.addCase(fetchCharacter.fulfilled, (state, action) => {
//       state.loading = false;
//       state.character = [...state.character, ...action.payload];
//       state.error = '';
//     })
//     builder.addCase(fetchCharacter.rejected, (state, action) => {
//       state.loading = false;
//       state.character = [];
//       state.error = action.error.message;
//     })
//   }
// })

// export default characterSlice.reducer;
// export { fetchCharacter }