import { createSlice } from "@reduxjs/toolkit";

let initialState = {modal: false};

let ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modal: (state, actions) => {
      state.modal = state = actions.payload
    }
  }
})

export const { modal } = ModalSlice.actions
export default ModalSlice.reducer