import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NoteListItem from '../components/NoteListItem';
import HomeButton from '../components/HomeButton';
import { GoHomeFill } from 'react-icons/go';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    const navigate = useNavigate()

    const addNoteHandler = () => {
        navigate('/form')
    }

    return (
        <div className='Container'>
            {<HomeButton path='/' name='Main' Icon={GoHomeFill}/>}
            <div className='ContentBox BasePadding'>
                <div className='NotesBoxWrap'>
                    {notes.length > 0 ?
                        <div className='NotesBox'>
                            {notes.map(note => (
                                <div className='ItemWrap' key={note.id}>
                                    <NoteListItem note={note} />
                                </div>
                            ))}
                        </div>
                    : 
                        <div className='EmptyBox'>
                            <h3>You don't have any notes yet</h3>
                            <button className='But Block' onClick={addNoteHandler}><span className='IconSpan'>{<FaPencilAlt/>}</span> Create note</button>
                        </div>
                    }
                </div>
            </div>
            {<Footer />}
        </div>
    );
};

export default NoteList;