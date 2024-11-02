import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';

interface buttonProps {
    path: string;
    name: string;
    Icon?: IconType;
}

const HomeButton: React.FC<buttonProps> = ({path, name, Icon}) => {

    const navigate = useNavigate()

    const clickHanler = () => {
        navigate(path)
    }

    return (
        <div className='BasePadding'>
            <button className='HomeButton' onClick={clickHanler}>
                <span className='IconSpan'>
                    {Icon && <Icon />}
                </span>
                <span>
                    {name}
                </span>
            </button>
            <hr />
        </div>
    )
}
export default HomeButton