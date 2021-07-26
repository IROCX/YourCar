import React, {useState} from 'react';
import {ContainerProps} from "../../../interfaces";
import Car from "../../components/Car";
import {ICar} from "../../../typings/Car";

import Mustang from './../../../assets/images/mustang.png'
import Jeep from './../../../assets/images/jeep.png'
import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css'
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../components/screenSizes";

function TopCarsContainer({children}: ContainerProps) {
    return (
        <div className={'max-w-screen-lg w-full flex flex-col items-center justify-center px-4 md:px-0 mb-10 mt-10'}>
            {children}
        </div>
    );
}

const Title = ({children}: ContainerProps) => {
    return <div className={'text-2xl lg:text-4xl text-black font-extrabold'}>
        {children}
    </div>
}
const CarsContainer = ({children}: ContainerProps) => {
    return <div className={'w-screen flex flex-row flex-wrap justify-evenly mt-7 md:mt-10'}>
        {children}
    </div>
}


const testCar: ICar = {
    name: "Mustang Shelby GT350",
    mileage: "10k",
    thumbnail: Mustang,
    dailyPrice: 70,
    monthPrice: 1600,
    transmission: "Auto",
    fuelType: "Petrol",
    rating: 4.5,
    shade: "#96acc1",
    category: "Supercar"
};

const testCar2: ICar = {
    name: "Jeep Wrangler",
    mileage: "20k",
    thumbnail: Jeep,
    dailyPrice: 50,
    monthPrice: 1500,
    transmission: "Auto",
    fuelType: "Petrol",
    rating: 4.5,
    shade: "#C97570",
    category: "Off-Road"
};


function TopCars() {


    const [current, setCurrent] = useState(0)

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})
    const isMedium = useMediaQuery({maxWidth: SCREENS.md})

    const Cars = [
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>
    ]

    return (
        <TopCarsContainer>
            <Title>
                Explore Our Top Deals
            </Title>
            <CarsContainer>
                <Carousel value={current} onChange={setCurrent}
                          slides={Cars}
                          plugins={[
                              {
                                  resolve: slidesToShowPlugin,
                                  options: {
                                      numberOfSlides: 3
                                  }
                              }
                          ]}
                          breakpoints={{
                              640: {
                                  plugins: [{
                                      resolve: slidesToShowPlugin,
                                      options: {
                                          numberOfSlides: 1
                                      }
                                  }],
                              },
                              1000: {
                                  plugins: [{
                                      resolve: slidesToShowPlugin,
                                      options: {
                                          numberOfSlides: 2
                                      }
                                  }],
                              },
                          }}
                />
            </CarsContainer>
            <Dots value={current} onChange={setCurrent}
                  number={isMobile ? Cars.length : isMedium ? Cars.length / 2 : Cars.length / 3}/>
        </TopCarsContainer>
    );
}

export default TopCars;