import PropTypes from 'prop-types';

const Card = ({ Pokemon }) => {
    console.log(Pokemon);
    return (
        <>
            {Pokemon.map((p) => (
                <div key={p.id} className="flex justify-center items-center bg-yellow-500 p-6 rounded-lg shadow-xl cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105 w-72 h-36">
                    <img src={p.sprites.front_default} className="w-32 transition duration-150 ease-out hover:ease-in hover:scale-110" />
                    <h1 className="text-white font-bold px-2 text-xl">{p.name}</h1>
                    <span className="text-white font-semibold px-2 text-xl">{p.base_experience}</span>
                </div>
            ))}
        </>


    )
}

Card.propTypes = {
    Pokemon: PropTypes.array.isRequired,
};

export default Card