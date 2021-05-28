import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className='col-md-4'>
            <div className='bg-primary shadow p-3 mb-5 bg-body rounded'>
                <p>{testimonial.quote}</p>
                <div className='mt-5 d-flex'>
                    <img style={{ height: '50px' }} src={testimonial.img} alt="" />
                    <div className='ms-2'>
                        <h6 style={{ color: '#1CC7C1' }}>{testimonial.name}</h6>
                        <small>{testimonial.from}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;