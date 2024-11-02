import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNote, editNote } from '../store/notes/notesSlise';
import { Note } from '../store/notes/types';
import { useNavigate } from 'react-router-dom';

interface NoteFormProps {
    existingNote?: Note;
}

const NoteForm: React.FC<NoteFormProps> = ({existingNote}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState(existingNote ? existingNote.title : '')
    const [body, setBody] = useState(existingNote ? existingNote.body : '')
    const [category, setCategory] = useState(existingNote ? existingNote.category : 'Work')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const note = {
            id: existingNote ? existingNote.id : Date.now().toString(),
            title,
            body,
            category
        }
        existingNote? dispatch(editNote(note)): dispatch(addNote(note))

        setTitle('')
        setBody('')
        setCategory('Work')
        navigate('/list')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='Body' required />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='Work'>Work</option>
                <option value='Personal'>Personal</option>
                <option value='Shopping'>Shopping</option>
            </select>
            <button className='But Block' type='submit'>{existingNote ? 'Edit Note' : 'Add Note'}</button>
        </form>
    )
}

export default NoteForm