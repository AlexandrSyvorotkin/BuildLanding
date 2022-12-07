import React from 'react';
import './Layout.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className='app'>
            <Header/>
                <div className='layout'>
                    <main className='main'>
                        {children}
                    </main>
                </div>
            <Footer/>
        </div>
    );
};

export default Layout;