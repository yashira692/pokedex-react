import { useEffect, useState } from 'react'
import { listPokemon, getManyPokemonDetails } from '../api/pokeapi'
import PokemonCard from '../components/PokemonCard'


export default function Home() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                const data = await listPokemon(12, 0)
                const details = await getManyPokemonDetails(data.results.map(p => p.url))
                setPokemons(details)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])


    return (
        <div>
            <header className="hero mb-4">
                <div className="container">
                    <h1 className="display-5 fw-bold">PokeDex Explorer</h1>
                    <p className="lead mb-0">Explora Pokémon desde la API pública PokeAPI. Demo con React + Vite + Router.</p>
                </div>
            </header>


            <main className="container">
                <h2 className="h4 mb-3">Listado simple de personajes</h2>
                {loading && <p>Cargando...</p>}
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="grid">
                    {pokemons.map(p => (
                        <PokemonCard key={p.id} pokemon={p} showProps={['id']} />
                    ))}
                </div>
            </main>
        </div>
    )
}