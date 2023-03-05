import { createSlice } from "@reduxjs/toolkit"


export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {  },
  reducers: {
    sampleReducer: (state, { payload }) => {
      state.sample = payload
    },
  },

  extraReducers: (builder) => {},
})

export default appConfigSlice.reducer

// Selectors
export const supportedFormNames = (store)=> store.appConfigSlice.supportedFormNames

export const { sampleReducer } = appConfigSlice.actions
