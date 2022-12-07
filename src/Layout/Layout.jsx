import React from 'react';
import './Layout.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <div className='layout'>

                    <main className='main'>
                        {children}
                    </main>

                </div>
            <Footer/>
        </>
    );
};

export default Layout;