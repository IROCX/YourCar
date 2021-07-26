import React from 'react';
import {ContainerProps, ILogoProps} from "../../../interfaces";

const LogoContainer = ({children}: ContainerProps) => {
    return <div className={'flex'}>{children}</div>
}


function Logo({textColor = 'black', logo}: ILogoProps) {
    return (
        <LogoContainer>
            <div className={'flex items-center h-6 md:h-9'}>
                <img src={logo} width={"auto"} height={"100%"} alt={'brand logo'}/>
            </div>
            <div className={`flex text-xl md:text-2xl font-bold text-${textColor} m-1`}>YourCar</div>
        </LogoContainer>
    );
}

export default Logo;