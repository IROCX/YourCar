import React from 'react';
import Blob from './../../../assets/images/blob.svg'
import Car from './../../../assets/images/mclaren-orange-big.png'
import Button from "../../components/Button";

const LeftContainer = () => {
    return (
        <div className={'w-1/2 flex flex-col '}>
            <h1 className={'font-bold text-2xl lg:text-6xl sm:text-3xl md:text-5xl text-black md:font-extrabold mb-4 sm:leading-snug lg:leading-normal lg:leading-relaxed'}>
                Rent The Best Qulity Car's With Us
            </h1>
            <p className={'text-xs lg:text-sm xl:text-lg sm:max-h-full overflow-hidden max-h-12 text-gray-800'}>
                Always choose the best car from our local stores or order it remotely at the best price for you and get
                the best quality cars for as long as you like
            </p>
            <div className={'flex mt-4 flex-wrap'}>
                <Button text={"Book Your Ride"}/>
                <Button theme={"filled"} text={"Sell Your Car"}/>
            </div>
        </div>
    )
}
const RightContainer = () => {
    return (
        <div className={'w-1/2 flex flex-col relative mt-20'}>
            <div className={'top-section-blob'}>
                <img src={Blob} style={{maxHeight: "max-content", width: "90%"}}/>
            </div>
            <div className={"top-section-car"}>
                <img src={Car} className={'w-auto h-auto'} style={{maxWidth: "90%"}}/>
            </div>
        </div>
    )
}

function TopSection() {
    return (
        <div className={`w-full max-w-screen-2xl flex flex-row justify-between px-3 lg:px-12`}
             style={{minHeight: "400px", marginTop: "6em"}}>
            <LeftContainer/>

            <RightContainer/>

        </div>
    );
}

export default TopSection;