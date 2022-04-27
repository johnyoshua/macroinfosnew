import React from 'react';

import axios from 'axios';

import { EyeIcon } from '@heroicons/react/outline'

export default class Modules extends React.Component {

    state = {
        formations: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/formations`)
            .then(res => {
                const formations = res.data;
                this.setState({ formations });
            })
    }

    render() {
        return (
            <div className='grid grid-cols-1 md:grid-cols-3 mx-4 md-mx-24 md:space-x-8 gap-5 my-8 pt-0 pb-0'>
                {this.state.formations.map((formation, key) => 
                    <div key={key} className=' border border-zinc-50 rounded-sm'>
                        <div className='w-full'>
                            <img src={`http://127.0.0.1:8000/${formation.imgUrl}`} alt='/' className='' />
                        </div>
                        <div className='flex justify-between px-2 items-center'>
                            <h1 className='text-xl font-semibold bg-teal text-white px-4 my-3 py-1'>{formation.categorie.nom}</h1>
                            <span className='text-2xl font-bold'>${formation.prix}</span>
                        </div>
                        <div>
                            <h2 className='pl-2 pr-2 text-2xl font-bold'>{formation.description}</h2>
                            <p className='pl-2 pr-2 text-gray-600 text-md'>{formation.detail.substring(0, 100)}...</p>
                        </div>
                        <div className='flex justify-between items-center py-2 bg-slate-100 pl-2 mt-3 '>
                            <div className='flex space-x-2 items-center'>
                                <div className=' w-2/12 rounded-full'>
                                    <img src={`http://127.0.0.1:8000/${formation.formateur.linkImage}`} alt='/' className=' rounded-full' />

                                </div>
                                <p className='text-md font-semibold'>{formation.formateur.nom}</p>
                            </div>
                            <span className='font-bold teal'>12</span><EyeIcon className='w-20 pr-2 pl-1 teal' />
                        </div>
                    </div>

                )

                }

            </div>

        )
    }
}