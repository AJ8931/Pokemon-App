import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Card.css";

const SingleCard = ({ p }) => {
    return (
        <>
            <div key={p.id} className={`flex flex-col justify-center items-center p-6 rounded-lg shadow-xl transition duration-150 ease-out hover:ease-in hover:scale-105 w-72 h-[22rem] ${p.types[0].type.name} bg-opacity-30`}>
                <div className='w-48 h-48'>
                    <img src={p.sprites.front_default} className="w-full transition duration-150 ease-out hover:ease-in hover:scale-110" />
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
                <Link to={{ pathname: '/Pokemon', state: { data: "hello" } }} className='bg-red-800 w-full p-2 m-2 rounded cursor-pointer text-white font-semibold transition duration-150 ease-out hover:ease-in hover:scale-110'>Redeem Now</Link>
                {console.log(p)}
            </div>
        </>


    )
}

SingleCard.propTypes = {
    p: PropTypes.object.isRequired,
};

export default SingleCard