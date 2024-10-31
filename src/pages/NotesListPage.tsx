import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NotePage from './NotePage';
import { Note } from '../store/notes/types';

interface NoteListProps {
  onEdit: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ onEdit }) => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div>
      {notes.map(note => (
        <NotePage key={note.id} note={note} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteList;