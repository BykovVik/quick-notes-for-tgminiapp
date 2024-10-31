import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/notes/notesSlise";
import { Note } from "../store/notes/types";

interface NoteItemProps {
    note: Note;
    onEdit: (note: Note) => void;
}

const NotePage: React.FC<NoteItemProps> = ({note, onEdit}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteNote(note))
    }

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>Category: {note.category}</p>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NotePage