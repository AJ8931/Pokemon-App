import { useState, useEffect } from "react";
import "./checpokemon.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

function PokemonCardGenerator() {
  const [pokemonData, setPokemonData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    setPokemonData(location.state.data);
  }, [location.state.data]);

  if (!pokemonData) {
    return <div role="status" className="static py-16">
      <svg aria-hidden="true" className="w-8 h-8 mr-2 animate-spin text-orange-800 fill-yellow-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
    </div>;
  }

  const hp = pokemonData.stats[0].base_stat;
  const imgSrc = pokemonData.sprites.other.dream_world.front_default;
  const pokeName =
    pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
  const statAttack = pokemonData.stats[1].base_stat;
  const statDefense = pokemonData.stats[2].base_stat;
  const statSpeed = pokemonData.stats[5].base_stat;

  // Set themeColor based on pokemon type
  const themeColor = typeColor[pokemonData.types[0].type.name];

  return (
    <>
      <div className="bg-neutral-200">
        <h2 className="text-4xl font-bold leading-7 text-yellow-300 sm:truncate py-6 sm:text-5xl sm:tracking-tight bg-[#306fb6] w-full text-center">POKEMON</h2>
        <div className="flex flex-col justify-center items-center p-8 w-full">
          <div className="container1 bg-transparent">
            <div id="card" className="rounded-xl" style={{ background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)` }}>
              <p className="hp">
                <span>HP</span>
                {hp}
              </p>
              <img src={imgSrc} alt={pokeName} />
              <h2 className="poke-name">{pokeName}</h2>
              <div className="types">
                {pokemonData.types.map((type, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "white",
                      color: typeColor[type.type.name]
                    }}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="stats">
                <div>
                  <h3>{statAttack}</h3>
                  <p>Attack</p>
                </div>
                <div>
                  <h3>{statDefense}</h3>
                  <p>Defense</p>
                </div>
                <div>
                  <h3>{statSpeed}</h3>
                  <p>Speed</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" className="text-indigo-400 pt-4 hover:underline">Go Back</Link>
        </div>
      </div>
    </>
  );
}

export default PokemonCardGenerator;
