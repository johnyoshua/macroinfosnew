import React from 'react';

import axios from 'axios';

export default class About extends React.Component {

    state = {
        appropos: [],
        sousApropos: [],
        domaines: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/appropos`)
            .then(res => {
                const appropos = res.data;
                this.setState({ appropos });
            })

        axios.get(`http://127.0.0.1:8000/api/sousAppropos`)
            .then(res => {
                const sousApropos = res.data;
                this.setState({ sousApropos });
            })

        axios.get(`http://127.0.0.1:8000/api/domaines`)
            .then(res => {
                const domaines = res.data;
                this.setState({ domaines });
            })
    }

    render() {
        return (


            <div className='container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden'>
                <div className="mt-16 text-center">
                    <h1 className="teal text-3xl font-semibold">A propoos de nous</h1>
                </div>
                <div className='my-14 flex flex-col lg:flex-row lg:space-x-20'>

                    {this.state.appropos.map((appropo, key) =>

                        <div key={key} className='lg:w-6/12'>
                            <img className=' w-full mb-6' src={`http://127.0.0.1:8000/${appropo.imageUrl}`} alt="" />
                            <h1 className=' text-gray-800 font-semibold my-3 text-xl'>{appropo.titre}</h1>
                            <p className='text-gray-500 mb-6 justify-center'>{appropo.detail.substring(0, 300)}...</p>
                            <span className='b-info text-darken font-semibold px-4 py-px text-sm rounded-xl'>Lire Plus</span>
                        </div>
                    )
                    }

                    <div className='lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0'>
                        {this.state.sousApropos.map(sous =>
                            <h1 className='text-gray-800 text-sm sm:text-lg font-semibold'>
                                {sous.detail}
                            </h1>
                        )

                        }

                        {this.state.domaines.map((domaine, index) =>

                            <div key={index} className='flex space-x-5 py-2'>
                                <div className='w-4/12'>
                                    <div className=' relative'>
                                        <img className='rounded-xl w-full' src={`http://127.0.0.1:8000/${domaine.imgUrl}`} alt="" />
                                    </div>
                                </div>
                                <div className='w-8/12'>
                                    <h1 className='text-gray-800 text-sm sm:text-lg font-semibold'>{domaine.description}</h1>
                                    <p className='text-gray-500 my-2 sm:my-4 text-xs sm:text-md hidden sm:block'>{domaine.detail}</p>
                                </div>
                            </div>
                        )

                        }
                    </div>
                </div>
            </div >
        )
    }
}