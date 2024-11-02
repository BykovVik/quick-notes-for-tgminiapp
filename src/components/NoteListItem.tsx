import React from 'react';
import { Note } from '../store/notes/types';
import { useNavigate } from 'react-router-dom';

interface NoteItemProps {
    note: Note;
}

const NoteListItem: React.FC<NoteItemProps> = ({note}) => {

    const navigate = useNavigate()
    const data = new Date(Number(note.id))


    const clickHandler = () => {
        note ? navigate(`/note/${note.id}`) : navigate('/list')
    }

    return (
        <div onClick={clickHandler}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>Category: {note.category}</p>
            <p>Date: {data.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    )
}

export default NoteListItem