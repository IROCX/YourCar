import React from 'react';
import {ContainerProps} from "../../../interfaces";
import Logo from "../../components/logo";
import CarLogoDark from './../../../assets/images/car-logo-dark.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";


function FooterContainer({children}: ContainerProps) {
    return (
        <div
            className={'flex flex-1 flex-col flex-wrap items-center flex-wrap w-full h-full bg-gray-900 pt-4 md:pt-12 pb-1'}>
            {children}
        </div>
    );
}

function InnerContainer({children}: ContainerProps) {
    return (
        <div
            className={'flex flex-wrap max-w-screen-xl lg:max-w-screen-2xl w-full my-4 px-4 justify-between md:justify-start'}>
            {children}
        </div>
    );
}

function SectionContainer({children}: ContainerProps) {
    return (
        <div className={'flex w-full md:w-auto flex-col flex-wrap my-4 md:my-0 mr-2 md:mr-16'}>
            {children}
        </div>
    );
}

function HorizontalContainer({children}: ContainerProps) {
    return (
        <div className={'flex items-center '}>
            {children}
        </div>
    );
}

function BottomSection({children}: ContainerProps) {
    return (
        <div className={'flex p-2 max-w-screen-xl lg:max-w-screen-2xl w-full justify-center md:justify-start'}>
            {children}
        </div>
    );
}

function CopyrightText({children}: ContainerProps) {
    return (
        <small className={'text-xs text-gray-400 text-center'}>
            {children}
        </small>
    );
}


const AboutContainer = ({children}: ContainerProps) => {
    return <div className={'flex flex-col mr-2 mb-2 md:mr-16'}>{children}</div>
}
const AboutText = ({children}: ContainerProps) => {
    return <div className={'text-sm font-normal text-white max-w-xs leading-5 mt-2'}>{children}</div>
}
const LinksList = ({children}: ContainerProps) => {
    return <div className={'outline-none list-none flex flex-col'}>{children}</div>
}

interface ILinkListItem {
    url: string,
    text: string
}

const ListItem = ({url, text}: ILinkListItem) => {
    return <li className={'mb-2'}>
        <a href={url} className={"text-xs text-white hover:text-gray-200 transition-all"}>
            {text}
        </a>
    </li>
}
const HeaderTitle = ({children}: ContainerProps) => {
    return <h2 className={'text-lg font-bold text-white mb-3'}>{children}</h2>
}


const RedIcon = ({children}: ContainerProps) => {
    return <span
        className={'w-10 h-10 rounded-full flex items-center justify-center text-white text-base mr-2 bg-red-500'}>
        {children}
    </span>
}

const SmallText = ({children}: ContainerProps) => {
    return <span className={'text-xs text-white'}>
        {children}
    </span>
}

function Footer() {
    return (
        <FooterContainer>

            <InnerContainer>

                <AboutContainer>
                    <Logo textColor={'white'} logo={CarLogoDark}/>
                    <AboutText>Yourcar is a car renting and selling company located globally which has high quality cars
                        and top-rated service.</AboutText>
                </AboutContainer>

                <SectionContainer>

                    <HeaderTitle>
                        Our Links
                    </HeaderTitle>

                    <LinksList>
                        <ListItem url={"/"} text={"Home"}/>
                        <ListItem url={"/"} text={"About Us"}/>
                        <ListItem url={"/"} text={"Services"}/>
                        <ListItem url={"/"} text={"Models"}/>
                        <ListItem url={"/"} text={"Blogs"}/>
                    </LinksList>

                </SectionContainer>

                <SectionContainer>

                    <HeaderTitle>
                        Other Links
                    </HeaderTitle>

                    <LinksList>
                        <ListItem url={"/"} text={"FAQs"}/>
                        <ListItem url={"/"} text={"Contact Us"}/>
                        <ListItem url={"/"} text={"Support"}/>
                        <ListItem url={"/"} text={"Privacy Policy"}/>
                        <ListItem url={"/"} text={"Terms & Conditions"}/>
                    </LinksList>

                </SectionContainer>

            </InnerContainer>

            <InnerContainer>

                <SectionContainer>

                    <HeaderTitle>
                        Call Now
                    </HeaderTitle>

                    <HorizontalContainer>

                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </RedIcon>

                        <SmallText>
                            +91 555 656 7771
                        </SmallText>

                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>

                    <HeaderTitle>
                        Mail Us
                    </HeaderTitle>

                    <HorizontalContainer>

                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </RedIcon>

                        <SmallText>
                            info@yourcar.com
                        </SmallText>

                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>

                <BottomSection>
                    <CopyrightText>
                        Copyright © {new Date().getFullYear()} Yourcar. All rights reserved.
                    </CopyrightText>
                </BottomSection>

        </FooterContainer>
);
}

export default Footer;