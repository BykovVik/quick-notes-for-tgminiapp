import React from "react";
import { useNavigate } from "react-router-dom";

interface buttonProps {
    path: string;
    name: string;
}

const HomeButton: React.FC<buttonProps> = ({path, name}) => {

    const navigate = useNavigate()

    const clickHanler = () => {
        navigate(path)
    }

    return (
        <div>
            <button className="HomeButton" onClick={clickHanler}>{name}</button>
            <hr />
        </div>
    )
}
export default HomeButton