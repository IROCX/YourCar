import React from 'react';
import Navbar from "../../components/navbar";
import TopSection from "./topSection";
import BookCard from "../../components/BookCard";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
import TopCars from "./topCars";
import Footer from "./Footer";

const PageContainer = ({children}: any) => {
    return (
        <div className={'flex flex-col w-full h-full items-center overflow-x-hidden'}>{children}</div>
    )
}

const HomePage = () => {
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <BookCard/>
            <BookingSteps/>
            <AboutUs/>
            <TopCars/>
            <Footer/>
        </PageContainer>
    );
}

export default HomePage;