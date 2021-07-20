import React from 'react';
import CarLogo from './../../../assets/images/car-logo.png'

const LogoContainer = ({children}: any) => {
    return <div className={'flex items-center'}>{children}</div>
}

function Logo() {
    return (
        <LogoContainer>
            <div className={'flex items-center h-6 md:h-9'}>
                <img src={CarLogo} width={"auto"} height={"100%"} alt={'brand logo'}/>
            </div>
            <div className={' flex items-center text-xl md:text-2xl font-bold text-black m-1'}>YourCar</div>
        </LogoContainer>
    );
}

export default Logo;