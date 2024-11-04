import React from 'react';
import NoteForm from '../components/NoteForm';
import HomeButton from '../components/HomeButton';
import { GoHomeFill } from 'react-icons/go';
import { useLocation } from 'react-router-dom';

const FormPage = () => {

    const location = useLocation()
    
    return (
        <div className='Container'>
            {<HomeButton path='/' name='Main' Icon={GoHomeFill}/>}
            <div className='ContentBox BasePadding'>
                <div className='FormWrap'>
                    <div>
                        {location.state ? <NoteForm existingNote={location.state.note} /> : <NoteForm />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormPage