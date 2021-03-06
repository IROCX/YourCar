import React from 'react';
import Logo from "../logo";
import NavMenu from "./navMenu";
import CarLogoLight from './../../../assets/images/car-logo.png'

const NavbarContainer = ({children}: any) => {
    return (
        <div className={'flex flex-row w-full max-w-screen-2xl items-center justify-between lg:px-12 md:px-8'}
             style={{minHeight: "75px"}}>
            {children}
        </div>
    )
}


function Navbar() {
    return (
        <NavbarContainer>
            <Logo textColor={'black'} logo={CarLogoLight}/>
            <NavMenu/>
        </NavbarContainer>
    );
}

export default Navbar;