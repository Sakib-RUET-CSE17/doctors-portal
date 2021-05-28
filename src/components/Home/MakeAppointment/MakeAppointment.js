import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppoinment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white">
                        <h5 className="text-primary text-uppercase mt-5">APPOINTMENT</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolor quis ex aspernatur quaerat maxime?</p>
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;