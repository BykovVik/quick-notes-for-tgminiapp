import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import HomeButton from '../components/HomeButton';
import { deleteNote } from '../store/notes/notesSlise';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaListAlt } from 'react-icons/fa';

const NotePage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const notes = useSelector((state: RootState) => state.notes.notes);
    const note = notes.find(note => note.id === id);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (note) {
            dispatch(deleteNote(note))
            navigate('/list')
        }
    }
    const handleEdit = () => {
        const data = {state: "edit", note: note}
        if (note) {
            navigate('/form', {state : data})
        }
    }

    return (
        <div className='Container'>
            {<HomeButton path='/list' name='List' Icon={FaListAlt} />}
            <div className='ContentBox BasePadding'>
                <div className='NotesBoxWrap'>
                    <div className='NotesBox'>
                        <div className='NoteDetail'>
                            <h3>{note?.title}</h3>
                            <p>{note?.body}</p>
                            <p>Category: {note?.category}</p>
                            <button className='PageButton Block' onClick={handleDelete}>Delete</button>
                            <button className='PageButton Empty' onClick={handleEdit}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer />}
        </div>
    )
}

export default NotePage