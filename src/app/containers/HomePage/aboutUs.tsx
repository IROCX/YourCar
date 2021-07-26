import React from 'react';

import {ContainerProps} from "../../../interfaces";

import Car from './../../../assets/images/jeep.png'


const AboutUsContainer = ({children}: ContainerProps) => {
    return <div className={'w-full flex flex-wrap items-center 2xl:justify-center py-4 px-7 md:px-0 bg-white mt-10'}>
        {children}
    </div>
}
const CarContainer = () => {
    return <div className={'flex flex-1 items-center justify-center h-60 -ml-2 mr-2 sm:mr-10 about-us-section-car'}>
        <img src={Car} className={'w-full h-auto'} style={{width: "100%"}}/>
    </div>
}

const InfoContainer = ({children}: ContainerProps) => {
    return <div className={'w-full mx-6  md:w-1/2 flex flex-col md:ml-6 2xl:ml-15'}>
        {children}
    </div>
}
const Title = ({children}: ContainerProps) => {
    return <div className={'text-black text-5xl md:5xl font-extrabold md:font-black md:leading-normal'}>
        {children}
    </div>
}

const Info = ({children}: ContainerProps) => {
    return <div className={'max-w-2xl text-sm md:text-base text-gray-500 mt-4 font-normal'}>
        {children}
    </div>
}


function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer/>
            <InfoContainer>
                <Title>
                    Feel The Best Experience With Our Rental Deals
                </Title>
                <Info>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam vitae nisi dapibus
                    pellentesque quis sit amet nunc. Phasellus mollis vehicula lacus, eget luctus sapien commodo id.
                    Fusce et augue a neque vulputate finibus. Morbi non justo interdum, placerat lectus luctus,
                    venenatis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Ut velit ex, lobortis vitae gravida et, ultricies quis elit. Donec facilisis, neque vel
                    feugiat suscipit, massa sapien posuere erat, non vestibulum massa lacus quis orci.
                </Info>
            </InfoContainer>
        </AboutUsContainer>
    );
}

export default AboutUs;