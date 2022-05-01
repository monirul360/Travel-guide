import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
const Checkout = () => {
    const confirm = e => {
        e.preventDefault();
        toast("Thank you for booking");
    }
    return (
        <div>
            <div className="bookin">
                <h1>Welcome</h1>
                <h2>Please booking now</h2>
            </div>
            <div className="bookin-from">
                <form onSubmit={confirm}>
                    <input type="text" name="" placeholder='Name' id="" required />
                    <input type="text" name="" placeholder='Address' id="" required />
                    <input type="text" name="" placeholder='City' id="" required />
                    <input type="text" placeholder='State' required />
                    <input type="email" name="" placeholder='Email address' id="" required />
                    <input type="number" name="" placeholder='Phone number' id="" required />
                    <input type="submit" value="Confirm" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Checkout;