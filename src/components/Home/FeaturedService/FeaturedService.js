import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam architecto reiciendis deleniti eaque delectus, accusamus molestiae repellat incidunt illo, quas quae quasi alias itaque nisi. Sequi dicta cum ipsam nemo ab et eveniet quibusdam animi beatae molestiae non, odit laudantium, mollitia culpa deleniti praesentium excepturi, quo voluptate ducimus. Commodi, possimus?
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;