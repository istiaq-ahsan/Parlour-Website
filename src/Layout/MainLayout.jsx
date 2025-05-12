import React from 'react';
import Navbar from '../Static/Navbar';
import Footer from '../Static/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
            <div className='md:mt-[72px]'>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
