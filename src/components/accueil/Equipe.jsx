import React from 'react';

import axios from 'axios';

export default class Equipe extends React.Component {

    state = {
        cible: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/cible`)
            .then(res => {
                const cible = res.data;
                this.setState({ cible });
            })
    }

    render() {
        return (

            <div className='bg-teal py-24 px-12'>

                <h1 className='text-3xl  md:text-left text-white font-bold py-2 '>Qui avons nous besoin</h1>
                <div className='md:flex space-x-8'>
                    <p className='text-xl font-semibold text-zinc-100 py-4'>{this.state.cible.detail}</p>
                </div>
                <div className='py-6'>
                    <button className='b-info py-2 px-5'>Nous Contacter</button>
                </div>
            </div>
        )
    }
}