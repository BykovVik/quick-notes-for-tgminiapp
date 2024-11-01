import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomeButton from "../components/HomeButton";

const NotePage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const notes = useSelector((state: RootState) => state.notes.notes);
    const note = notes.find(note => note.id === id);
    const dataString = note ? note.id : Date.now().toString()
    const targetDate = new Date(Number(dataString))

    return (
        <>
        
        {<HomeButton path='/list' name='Назад к списку' />}
        <div>
            <h3>{note?.title}</h3>
            <p>{note?.body}</p>
            <p>Category: {note?.category}</p>
            <p>Date: {targetDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        </>
    )
}

export default NotePage