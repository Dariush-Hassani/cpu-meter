import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeSliceModel } from "../models/redux-slices/theme-slice-model";
import { defaultValues } from "../utils/values/default-values";
import { ThemeModeEnum } from "../models/theme-model";

const initialState: ThemeSliceModel = {
  themeMode: defaultValues.themeMode,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeModeEnum>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
