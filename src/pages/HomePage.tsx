import React from "react";
import { useNavigate } from "react-router-dom";
import note from "../media/logo.png"
import HomeButton from "../components/HomeButton";

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
                {<HomeButton path="/" name="QN"/>}
                <div className="LogoBox">
                    <img src={note} alt="pic"/>
                </div>
                <div className="TitleBox">
                    <p>quick</p>
                    <h3>notes</h3>
                </div>
                <div>
                    <button className="But Block" onClick={addNoteHandler}>Создать заметку</button>
                    <button className="But Empty" onClick={moveNotesListPage}>Мои заметки</button> 
                </div>
            </div>
        </div>
    )
}

export default HomePage