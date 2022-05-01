import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <section>
                <div className="services-container">
                    {
                        services.map(serviceShow => <Service
                            key={serviceShow.id}
                            serviceShow={serviceShow}
                        >
                        </Service>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;