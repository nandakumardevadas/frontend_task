import React from 'react';

import Services from '../components/sections/Services';
import Info from '../components/sections/Info';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const HomePage = () => {
    return (
        <>
            <Services />
            <Info />
            <Testimonials />
            <Contact />
        </>
    )
}

export default HomePage;