import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteState } from "./types";

const initialState: NoteState = {
    notes: [],
    categories: ['Work', 'Personal', 'Shopping']
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state: NoteState, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        editNote: (state: NoteState, action: PayloadAction<Note>) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index != -1) {
                state.notes[index] = action.payload;
            }
        },
        deleteNote: (state: NoteState, action: PayloadAction<Note>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        }
    }
})

export const {addNote, editNote, deleteNote} = notesSlice.actions;
export default notesSlice.reducer