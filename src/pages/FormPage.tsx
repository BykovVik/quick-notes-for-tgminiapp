import React from 'react';
import NoteForm from '../components/NoteForm';
import HomeButton from '../components/HomeButton';
import { GoHomeFill } from 'react-icons/go';
import Footer from '../components/Footer';

const FormPage = () => {
    return (
        <div className='Container'>
            {<HomeButton path='/' name='Main' Icon={GoHomeFill}/>}
            <div className='ContentBox BasePadding'>
                <div className='FormWrap'>
                    <div>
                        {<NoteForm />}
                    </div>
                </div>
            </div>
            {<Footer/>}
        </div>
    )
}
export default FormPage