import React from 'react';
import { GiClick } from "react-icons/gi";

const Footer: React.FC = () => {

    return (
        <div className='Footer BasePadding'>
            <h2>Наши ресурсы:</h2>
            <p><a href='https://t.me/this_is_for_geeks'><GiClick/> Telegram канал о программировании</a></p>
            <p><a href='https://t.me/gypsy_studio'><GiClick/> Telegram канал о Инди-Разработке игр</a></p>
            <p><a href='https://t.me/book_of_change_bot'><GiClick/> Книга Перемен "И Цзин" в Telegram</a></p>
        </div>
    )
}
export default Footer