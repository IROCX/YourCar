import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarAlt, faCar, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import {ContainerProps} from "../../../interfaces";


const Title = ({children}: ContainerProps) => {
    return <div className={'text-2xl lg:text-4xl text-black font-extrabold '}>
        {children}
    </div>
}

const StepsContainer = ({children}: ContainerProps) => {
    return <div className={'flex gap-16 flex-col sm:flex-row justify-evenly flex-wrap mt-7 lg:mt-16'}>
        {children}
    </div>
}

const StepContainer = ({children}: ContainerProps) => {
    return <div className={'flex flex-col w-full sm:w-96 items-center transition-colors hover:text-red-500'}>
        {children}
    </div>
}

const Step = ({children}: ContainerProps) => {
    return <div className={'flex rounded-lg items-center justify-center p-6 box-shadow'}>
        {children}
    </div>
}

const StepTitle = ({children}: ContainerProps) => {
    return <div className={'text-black text-lg font-semibold mt-4'}>
        {children}
    </div>
}

const StepDescription = ({children}: ContainerProps) => {
    return <div className={'w-10/12 text-xs md:text-sm text-center text-gray-600'}>
        {children}
    </div>
}

const StepIcon = ({children}: ContainerProps) => {
    return <div className={'text-3xl text-red-500'}>
        {children}
    </div>
}

function BookingSteps() {
    return (
        <div className={'w-full flex flex-col items-center py-3 lg:py-6 mt-40'}>

            <Title>Get your car in just 3-steps</Title>
            <StepsContainer>
                {/*step 1*/}
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Choose Location
                    </StepTitle>
                    <StepDescription>
                        Find the nearest Yourcar point and book your car.
                    </StepDescription>
                </StepContainer>

                {/*step 2*/}
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Pic-Up Date
                    </StepTitle>
                    <StepDescription>
                        Pick-up date of your choice for renting your car.
                    </StepDescription>
                </StepContainer>

                {/*step 3*/}
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCar}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Book Your Car
                    </StepTitle>
                    <StepDescription>
                        Book car of your choice.
                    </StepDescription>
                </StepContainer>
            </StepsContainer>
        </div>
    );
}

export default BookingSteps;