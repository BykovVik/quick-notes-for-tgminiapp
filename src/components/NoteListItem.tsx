import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/notes/notesSlise";
import { Note } from "../store/notes/types";
import { useNavigate } from "react-router-dom";

interface NoteItemProps {
    note: Note;
}

const NoteListItem: React.FC<NoteItemProps> = ({note}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        dispatch(deleteNote(note))
    }
    const clickHandler = () => {
        navigate(`/note/${note.id}`)
    }

    return (
        <div onClick={clickHandler}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>Category: {note.category}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NoteListItem