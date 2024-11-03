import { configureStore } from "@reduxjs/toolkit";
import notesReducer, {subscribeToStore} from "./notes/notesSlise"

const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

subscribeToStore(store);

export default store