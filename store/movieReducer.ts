import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../typings'

export interface MovieState {
  value: Movie | null
}

const initialState: MovieState = {
  value: null ,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMovie } = movieSlice.actions

export default movieSlice.reducer