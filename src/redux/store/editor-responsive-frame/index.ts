import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ResponsiveFrameState } from "./types";

const initialState: ResponsiveFrameState = {
  view: "lg"
}

export const editorResponsiveFrameSlice = createSlice({
  name: "editor-responsive-frame",
  initialState,
  reducers: {
    setResponsiveFrame: (state, action: PayloadAction<ResponsiveFrameState["view"]>) => {
      state.view = action.payload
    }
  }
})

export const { setResponsiveFrame } = editorResponsiveFrameSlice.actions
export const editorResponsiveFrameReducer = editorResponsiveFrameSlice.reducer