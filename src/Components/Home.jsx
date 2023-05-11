import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"

const Home = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [Next, setNext] = useState('')
    const [Prev, setPrev] = useState('')
    const [Pokemons, setPokemons] = useState([])
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon')

    const pokemons = async (pokemon) => {
        const newPokemons = [];
        for (const item of pokemon) {
            const response = await axios.get(item.url);
            newPokemons.push(response.data);
        }
        setPokemons(state => [...state, ...newPokemons]);
    }

    useEffect(() => {
        const source = axios.CancelToken.source();
        setLoading(true);
        axios.get(url, {
            cancelToken: source.token,
        })
            .then(async (response) => {
                // console.log(response.data.next);
                setNext(response.data.next);
                setPrev(response.data.previous);
                setPokemon(response.data.results);
                await pokemons(response.data.results);
                setLoading(false)
            })

        return () => {
            // Cancel the request if the component unmounts
            source.cancel();
        };
    }, [url]);
    useEffect(() => {
        console.log('pokemon:', pokemon);
        console.log('pokemon:', Pokemons);
        console.log('Next:', Next);
        console.log('Prev:', Prev);
    }, [pokemon, Next, Prev, Pokemons]);

    return (
        <div className="flex flex-col justify-center items-center w-full bg-neutral-200">
            <h2 className="text-4xl font-bold leading-7 text-yellow-300 sm:truncate py-6 sm:text-5xl sm:tracking-tight bg-[#306fb6] w-full text-center">POKEDEX</h2>
            {loading ? <div role="status" className="static py-16">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 animate-spin text-orange-800 fill-yellow-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            </div> :
                <div className="flex justify-center flex-row items-center px-6 py-8 flex-wrap gap-8">
                    {Pokemons && <Card Pokemon={Pokemons} />}
                </div>
            }
            <div className="flex flex-row justify-center items-center w-full">
                {Prev && <button className="bg-yellow-500 text-white p-2 rounded-md w-32 m-4 border-2 hover:bg-red-800 focus:bg-red-800 transition duration-150 ease-out hover:ease-in" onClick={() => {
                    setPokemons([])
                    setURL(Prev)
                }} >previous</button>}
                {Next && <button className="bg-yellow-500 text-white p-2 rounded-md w-32 m-4 border-2 hover:bg-red-800 focus:bg-red-800 transition duration-150 ease-out hover:ease-in" onClick={() => {
                    setPokemons([])
                    setURL(Next)
                }} >Next</button>}
            </div>
        </div>
    )
}

export default Home