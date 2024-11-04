import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import note from '../media/logo.png'
import HomeButton from '../components/HomeButton';
import { FaPenSquare, FaPencilAlt, FaList } from 'react-icons/fa';

const HomePage = () => {

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        } else {
            console.log("Telegram Web App SDK не доступен");
        }
    }, []);
    const navigate = useNavigate()

    const addNoteHandler = () => {
        navigate('/form')
    }
    const moveNotesListPage = () => {
        navigate('/list')
    }
    
    return (
        <div className='Container'>
            {<HomeButton path='/' name='QN' Icon={FaPenSquare} />}
            <div className='ContentBox BasePadding'>
                <div className='LogoBox SecondColor'>
                    <img src={note} alt='pic'/>
                </div>
                <div className='TitleBox'>
                    <p>quick</p>
                    <h3>notes</h3>
                </div>
                <div>
                    <button className='But Block' onClick={addNoteHandler}><span className='IconSpan'>{<FaPencilAlt/>}</span> Create note</button>
                    <button className='But Empty' onClick={moveNotesListPage}><span className='IconSpan'>{<FaList/>}</span> Note list</button> 
                </div>
            </div>
        </div>
    )
}

export default HomePage