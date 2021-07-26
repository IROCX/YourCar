import React from 'react';
import {ICar} from "../../../typings/Car";
import {ContainerProps} from "../../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faFillDrip, faStar, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

interface ICarProps extends ICar {
}

const CarContainer = ({children}: ContainerProps) => {
    return <div
        className={'flex flex-col items-center  justify-between p-5 rounded-md m-1 w-3/4 h-full'}>
        {children}
    </div>
}

const CarThumbnail = ({image, shade}: any) => {
    return <div style={{width: "100%", position: "relative"}}>
        <span className={"min-w-full h-3/4 absolute top-5 rounded-2xl"} style={{zIndex: -1, background: `${shade}`}}/>
        <img src={image} style={{height: "100%", width: "100%"}} alt={"car"}/>
    </div>
}

const CarName = ({children}: ContainerProps) => {
    return <h1 className={'text-2xl font-bold text-black mt-1 mb-1'}>
        {children}
    </h1>
}

const CarCategory = ({children}: ContainerProps) => {
    return <h1 className={'text-lg font-bold text-gray-600 mt-1 mb-1'}>
        {children}
    </h1>
}

const PriceContainer = ({children}: ContainerProps) => {
    return <div className={'w-full flex justify-between mt-3  text-lg'}>
        {children}
    </div>
}

const DailyPrice = ({children}: ContainerProps) => {
    return <div className={'text-red-500 font-bold'}>
        {children}
    </div>
}

const MonthPrice = ({children}: ContainerProps) => {
    return <div className={'text-gray-500 font-bold'}>
        {children}
    </div>
}

const Icon = ({children}: ContainerProps) => {
    return <span className={'text-gray-400 mr-1'}>
        {children}
    </span>
}
const Text = ({children}: ContainerProps) => {
    return <span className={'text-xs font-thin'} style={{color: "inherit"}}>
        {children}
    </span>
}

const CarDetailsContainer = ({children}: ContainerProps) => {
    return <div className={'flex w-full justify-between text-lg'}>
        {children}
    </div>
}

const CarDetails = ({children}: ContainerProps) => {
    return <span className={'flex items-center'}>
        {children}
    </span>
}
const CarInfo = ({children}: ContainerProps) => {
    return <div className={'text-gray-400'}>
        {children}
    </div>
}
const Separator = () => {
    return <div className={'flex bg-gray-300 my-2 min-w-full min-h-px'}/>
}

function RentButton({text}: any) {
    const BASE_BUTTON_STYLE = "w-full flex items-center justify-center px-5 py-3 outline-none rounded-md text-white text-xs font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out"
    const OUTLINED_BUTTON_STYLE = "bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500"

    return (
        <div className={'min-w-full mt-5'}>
            <button
                className={`${BASE_BUTTON_STYLE} ${OUTLINED_BUTTON_STYLE}`}>
                {text}
            </button>
        </div>
    );
}


function Car(props: ICarProps) {

    const {
        thumbnail,
        name,
        mileage,
        transmission,
        fuelType,
        dailyPrice,
        monthPrice,
        rating,
        shade = "white",
        category
    } = props

    return (
        <CarContainer>
            <CarThumbnail image={thumbnail} shade={shade}/>
            <CarName>{name}</CarName>
            <CarCategory>{category}</CarCategory>
            <PriceContainer>
                <DailyPrice>
                    ₹ {dailyPrice} <Text>/day</Text>
                </DailyPrice>
                <MonthPrice>
                    ₹ {monthPrice} <Text>/month</Text>
                </MonthPrice>
            </PriceContainer>
            <Separator/>
            <CarDetailsContainer>
                <CarDetails>
                    <Icon><FontAwesomeIcon icon={faTachometerAlt}/></Icon>
                    <CarInfo>
                        {mileage}
                    </CarInfo>
                </CarDetails>
                <CarDetails>
                    <Icon><FontAwesomeIcon icon={faEllipsisH}/></Icon>
                    <CarInfo>
                        {transmission}
                    </CarInfo>
                </CarDetails>
                <CarDetails>
                    <Icon><FontAwesomeIcon icon={faFillDrip}/></Icon>
                    <CarInfo>
                        {fuelType}
                    </CarInfo>
                </CarDetails>
                <CarDetails>
                    <Icon><FontAwesomeIcon icon={faStar}/></Icon>
                    <CarInfo>
                        {rating}
                    </CarInfo>
                </CarDetails>
            </CarDetailsContainer>
            <RentButton text={"Rent Now"}/>
        </CarContainer>
    );
}

export default Car;