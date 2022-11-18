import React from 'react';
import './Layout.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header/>
                <main className='main'>
                    {children}
                </main>
            <Footer/>
        </div>
    );
};

export default Layout;