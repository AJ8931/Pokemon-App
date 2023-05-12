import { useLocation } from 'react-router-dom';

const Open_Pokemon = () => {
  const location = useLocation();
  console.log(location.state.data);
  const pokemonData = location.state.data;
  console.log(pokemonData, "pokemon adat");
  console.log(pokemonData, "pokemon adat");
  console.log(pokemonData, "pokemon adat");
  console.log(pokemonData, "pokemon adat");
  return (
    <>
      {location.state.data !== null &&
        <div className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-1/2 lg:w-1/3 mx-2 my-2">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="h-48 w-full object-contain"
          />
          <div className="px-4 py-2">
            <h3 className="font-bold text-lg">{pokemonData.name}</h3>
            <ul className="mt-2">
              {pokemonData.types.map((type, index) => (
                <li
                  key={index}
                  className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default Open_Pokemon
