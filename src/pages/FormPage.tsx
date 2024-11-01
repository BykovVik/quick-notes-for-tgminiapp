import React from "react";
import NoteForm from "../components/NoteForm";
import HomeButton from "../components/HomeButton";

const FormPage = () => {
    return (
        <div className="Container">
            <div className="CenteredBox">
                <HomeButton path='/' name='На главную'/>
                <NoteForm />
            </div>
        </div>
    )
}
export default FormPage