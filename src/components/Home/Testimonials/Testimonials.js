import React from 'react';
import './Testimonials.css'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, hic quis minus obcaecati iure vitae earum dolor saepe aspernatur molestiae velit, minima distinctio ipsa, architecto esse! Maiores tenetur deserunt sint.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, hic quis minus obcaecati iure vitae earum dolor saepe aspernatur molestiae velit, minima distinctio ipsa, architecto esse! Maiores tenetur deserunt sint.',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, hic quis minus obcaecati iure vitae earum dolor saepe aspernatur molestiae velit, minima distinctio ipsa, architecto esse! Maiores tenetur deserunt sint.',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    },
]


const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="w-75 row mt-5 pt-5">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;