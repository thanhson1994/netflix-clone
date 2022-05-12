import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  value: boolean
}

const initialState: ModalState = {
  value: false ,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = modalSlice.actions

export default modalSlice.reducer