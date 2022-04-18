import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as P from "./PlusButton.style"

import plus from "../../assets/image/button/plus.svg"

const PlusButton = (
    {url}
) => {
    const navigate = useNavigate();
    function clickButton(){
        navigate(url)
        // Navigate(`/${url}`)
    }

    return (
        <P.ButtonContainer onClick={()=>clickButton(url)}>
            <img src={plus}/>
        </P.ButtonContainer>
    );
};

export default PlusButton;