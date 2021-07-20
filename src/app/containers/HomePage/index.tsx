import React from 'react';
import Navbar from "../../components/navbar";

const PageContainer = ({children}: any) => {
    return (
        <div className={'flex flex-col w-full h-full items-center overflow-x-hidden'}>{children}</div>
    )
}

const HomePage = () => {
    return (
        <PageContainer>
            <Navbar/>
        </PageContainer>
    );
}

export default HomePage;