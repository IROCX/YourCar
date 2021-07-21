import React from 'react';
import Navbar from "../../components/navbar";
import TopSection from "./topSection";

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
        </PageContainer>
    );
}

export default HomePage;