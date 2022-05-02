import React from 'react';
import Guide from '../../Guide/Guide';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Guide></Guide>
        </div>
    );
};

export default Home;