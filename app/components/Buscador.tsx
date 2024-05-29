import { FaSearch } from 'react-icons/fa';

export function Buscador() {
    return(
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold">Busca ofertas</h1>
                <p className="mt-3">Encuentra el trabajo adecuado para ti</p>
                <div className='flex items-center mt-4'>
                    <input type="text" placeholder="Buscar" className="w-70 h-10 px-4 mt-4 rounded-s-xl text-black"/>
                    <button className="bg-[#ff6725] text-white w-[70px] h-10 mt-4 rounded-e-xl flex items-center justify-center">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}