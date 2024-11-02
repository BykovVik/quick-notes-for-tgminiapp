import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import HomeButton from '../components/HomeButton';
import { deleteNote } from '../store/notes/notesSlise';

const NotePage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const notes = useSelector((state: RootState) => state.notes.notes);
    const note = notes.find(note => note.id === id);
    const dispatch = useDispatch()

    const handleDelete = () => {
        if (note) {
            dispatch(deleteNote(note))
        }
    }

    return (
        <div className='Container'>
            <div className='CenteredBox'>
                {<HomeButton path='/list' name='Назад к списку' />}
                <div>
                    <h3>{note?.title}</h3>
                    <p>{note?.body}</p>
                    <p>Category: {note?.category}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default NotePage