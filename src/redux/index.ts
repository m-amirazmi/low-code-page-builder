import { configureStore } from '@reduxjs/toolkit'
import { editorResponsiveFrameReducer } from './store/editor-responsive-frame'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    editorResponsiveFrame: editorResponsiveFrameReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector