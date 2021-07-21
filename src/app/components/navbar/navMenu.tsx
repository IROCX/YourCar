import React from 'react';
import {useMediaQuery} from 'react-responsive'
import {SCREENS} from "../screenSizes";
import {slide as Menu} from 'react-burger-menu'

const styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '20px',
        height: '20px',
        right: '20px',
        top: '20px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        position: 'absolute',
        right: '20px',
        top: '20px',
        height: '20px',
        width: '20px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        top: 0,
        height: '100vh',
        background: "red"
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}


const NavItem = ({menu, children}: any) => {

    console.log(menu, children)
    return <li
        className={`text-xs md:text-base ${ menu?'text-white text-xl mb-3 focus:text-white':'text-black' } font-medium mr-3 md:mr-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700`}>
        {children}
    </li>
}

function NavMenu() {

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})
    console.log(isMobile)
    if (isMobile) {
        return <Menu right styles={styles}>
            <ul className={'flex list-none'}>
                <NavItem menu>
                    <a href={'/'}>Home</a>
                </NavItem>
                <NavItem menu>
                    <a href={'/cars'}>Cars</a>
                </NavItem>
                <NavItem menu>
                    <a href={'/services'}>Services</a>
                </NavItem>
                <NavItem menu>
                    <a href={'/contact'}>Contact Us</a>
                </NavItem>
            </ul>
        </Menu>
    } else {
        return <ul className={'flex list-none'}>
            <NavItem>
                <a href={'/'}>Home</a>
            </NavItem>
            <NavItem>
                <a href={'/cars'}>Cars</a>
            </NavItem>
            <NavItem>
                <a href={'/services'}>Services</a>
            </NavItem>
            <NavItem>
                <a href={'/contact'}>Contact Us</a>
            </NavItem>
        </ul>
    }
}

export default NavMenu;