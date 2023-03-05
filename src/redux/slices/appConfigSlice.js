import { createSlice } from "@reduxjs/toolkit";

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {},
  reducers: {
    sampleReducer: (state, { payload }) => {
      state.sample = payload;
    },
  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(getPatient.fulfilled, (state, action) => {
    //     state.patientDetails = action.payload;
    //     state.patientDetailsStatus = "Success";
    //   })
    // .addCase(getPatient.pending, (state) => {
    //   state.patientDetailsStatus = "Pending";
    // })
    // .addCase(getPatient.rejected, (state) => {
    //   state.patientDetailsStatus = "Failed";
    // })},
  },
});

export default appConfigSlice.reducer;

// Selectors
export const supportedFormNames = (store) =>
  store.appConfigSlice.supportedFormNames;

export const { sampleReducer } = appConfigSlice.actions;
