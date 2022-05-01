import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ serviceShow }) => {
    const { name, img, price, description } = serviceShow;
    return (
        <div>
            <section>
                <div className="service-show">
                    <img src={img} alt="" />
                    <div className="service-text">
                        <h3>{name}</h3>
                        <h1><span> $ {price}</span></h1>
                        <p>{description}</p>
                        <Link id='Booking-now' to="/checkout">Booking now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;