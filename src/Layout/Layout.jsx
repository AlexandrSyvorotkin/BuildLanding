import React from 'react';
import './Layout.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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