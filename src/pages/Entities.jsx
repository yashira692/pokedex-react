import { useEffect, useState } from 'react'
import { listPokemon, getManyPokemonDetails } from '../api/pokeapi'
import PokemonCard from '../components/PokemonCard'


export default function Entities() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)
    const limit = 20


    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                const data = await listPokemon(limit, page * limit)
                const details = await getManyPokemonDetails(data.results.map(p => p.url))
                setPokemons(details)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [page])


    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h1 className="h4 mb-0">Entities</h1>
                <div className="btn-group">
                    <button className="btn btn-outline-secondary" disabled={page === 0} onClick={() => setPage(p => Math.max(0, p - 1))}>Anterior</button>
                    <button className="btn btn-outline-secondary" onClick={() => setPage(p => p + 1)}>Siguiente</button>
                </div>
            </div>


            <p className="text-muted">Se muestran 3 propiedades por entidad: <strong>ID</strong>, <strong>Altura</strong> y <strong>Peso</strong>.</p>


            {loading && <p>Cargando...</p>}
            {error && <div className="alert alert-danger">{error}</div>}


            <div className="grid">
                {pokemons.map(p => (
                    <PokemonCard key={p.id} pokemon={p} showProps={['id', 'height', 'weight']} />
                ))}
            </div>
        </div>
    )
}