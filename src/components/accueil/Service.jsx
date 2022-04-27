import React from 'react';

import axios from 'axios';


export default class Service extends React.Component {

    state = {
        services: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/services`)
            .then(res => {
                const services = res.data;
                this.setState({ services });
            })
    }

    render() {
        return (

            <div className='w-full bg-white px-4'>
                <div className="my-10 text-center">
                    <h1 className="teal text-4xl font-semibold">Nos services</h1>
                </div>
                {this.state.services.map((service, key) =>

                    <div key={key} className='max-x-[1240px] mx-auto grid md:grid-cols-2 pb-5'>
                        <img className='w-[500px] mx-auto my-4' src={`http://127.0.0.1:8000/${service.imageUrl}`} alt='/' />
                        <div className='lg:w-11/12 flex flex-col  mt-12 space-y-5 lg:space-y-0 lg:mt-0'>
                            <h1 className='md:text-2xl sm:text-3xl text-2xl font-bold py-2'>
                                {service.description}
                            </h1>

                            {service.sousserives.map((sousService, key) =>
                                <div key={key} className='flex space-x-5 py-2'>
                                    <div className='w-6/12 md:w-2/12'>
                                        <div className=' relative'>
                                            <img className='rounded-xl w-full' src={`http://127.0.0.1:8000/${sousService.imgUrl}`} alt="" />
                                        </div>
                                    </div>
                                    <div className='w-8/12'>
                                        <h1 className='text-gray-800 text-sm sm:text-lg font-semibold'>{sousService.detail}</h1>
                                    </div>
                                </div>

                            )

                            }

                        </div>
                    </div>

                )

                }
            </div>
        )
    }
}