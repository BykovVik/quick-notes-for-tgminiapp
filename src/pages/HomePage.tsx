import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

    const addNoteHandler = () => {
        navigate('/form')
    }
    const moveNotesListPage = () => {
        navigate('/list')
    }
    
    return (
        <div className="Container">
            <div className="CenteredBox">
                <div>
                    <button onClick={addNoteHandler}>Создать заметку</button>
                    <button onClick={moveNotesListPage}>Мои заметки</button> 
                </div>
            </div>
        </div>
    )
}

export default HomePage