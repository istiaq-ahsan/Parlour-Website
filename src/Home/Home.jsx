import React from 'react';
import Banner from './Sub-Home/Banner';
import Services from './Sub-Home/Services';
import Stats from './Sub-Home/Stats';
import Testimonial from './Sub-Home/Testimonial';
import ContactForm from './Sub-Home/ContactForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Stats></Stats>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
}

export default Home;
