import PropTypes from 'prop-types';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({ Pokemon }) => {
    return (
        <>
            {Pokemon.map((p) => (
                <div key={p.id} className={`flex flex-col justify-center items-center p-6 rounded-lg shadow-xl transition duration-150 ease-out hover:ease-in hover:scale-105 w-72 h-[22rem] ${p.types[0].type.name} bg-opacity-30`}>
                    <div className='w-36 h-48'>
                        <img src={p.sprites.other.dream_world.front_default} className="w-full transition duration-150 ease-out hover:ease-in hover:scale-110 focus:scale-110" />
                    </div>
                    <div className='w-48 flex flex-col justify-center items-center'>
                        <h1 className="text-white font-bold px-2 text-xl capitalize">{p.name}</h1>
                        <div className='flex flex-col justify-between items-center w-full px-6'>
                            <p className='text-neutral-100 font-semibold px-2 text-lg'>
                                <span className='text-red-800'>Type:</span> {p.types[0].type.name}
                            </p>
                            <p className="text-neutral-100 font-semibold px-2 text-lg right-0 whitespace-pre"><span className='text-red-800'>Base-XP:</span> {p.base_experience}</p>
                        </div>
                    </div>
                    <Link to='/Pokemon' state={{ data: p }} className='bg-red-800 text-center w-full p-2 m-2 rounded cursor-pointer text-white font-semibold transition duration-150 ease-out hover:ease-in hover:scale-110'>Check Now</Link>
                </div>
            ))}
        </>


    )
}

Card.propTypes = {
    Pokemon: PropTypes.array.isRequired,
};

export default Card