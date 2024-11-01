import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NoteListItem from '../components/NoteListItem';
import HomeButton from '../components/HomeButton';

const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    return (
        <div>
        {<HomeButton path='/' name='На главную'/>}
        {notes.length > 0 ?
            notes.map(note => (
                <NoteListItem key={note.id} note={note} />
            ))
        : 
            <div>
                <h1>У вас пока еще нет заметок</h1>
            </div>
        }
        </div>
    );
};

export default NoteList;