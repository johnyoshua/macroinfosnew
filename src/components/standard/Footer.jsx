import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-0 bg-gray-900'>
            <div className=' max-w-lg mx-auto'>
                <div className='flex py-12 justify-center text-white px-20 sm:px-36'>
                    <div className='relative'>
                        <h1 className=' font-bold text-xl  pr-5 relative z-50'>MacroInfos</h1>

                    </div>
                    <span className="border-l border-gray-500  text-sm pl-5 py-2 font-semibold">Votre solution
                        informatique</span>
                </div>
                <div className=' text-center py-8 pt-5'>
                    <label className='text-gray-300 font-semibold'>Abonnez-vous à notre newsletter et recevez les meilleures
					nouvelles directement dans votre boîte de réception.</label>
                    <div className=' px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3'>

                       

                        <button type="submit"
						className="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full"
						>Envoyer</button>

                    </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm justify-center py-1">
				<a href="" className="pr-3">Téléphone</a>
				<a href="" className="border-l border-gray-400 px-3">+243 995 097 005</a>
			</div>
			<div className="flex items-center text-gray-400 text-sm justify-center py-1">
				<a href="" className="pr-3">E-mail</a>
				<a href="" className="border-l border-gray-400 px-3">admin@macroinfos.com</a>
			</div>

			<div className="flex items-center text-gray-400 text-sm justify-center">
				<a href="" className="pr-3">Uvira</a>
				<a href="" className="border-l border-gray-400 px-3">C/Mulongwe</a>
				<a href="" className="border-l border-gray-400 pr-3 pl-3">AV/Ubwari</a>
                <a href="" className="border-l border-gray-400 pl-3"> Au long de la RN5</a>
			</div>
			<div className="text-center text-white pb-5">
				<p className="my-3 text-gray-400 text-sm">&copy; 2022 MacroInfos </p>
			</div>
            </div>
        </footer>
  )
}

export default Footer