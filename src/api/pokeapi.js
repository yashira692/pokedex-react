const BASE = 'https://pokeapi.co/api/v2'


export async function listPokemon(limit = 20, offset = 0) {
    const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`)
    if (!res.ok) throw new Error('Error al obtener la lista de Pokémon')
    return res.json()
}


export async function getPokemonByName(name) {
    const res = await fetch(`${BASE}/pokemon/${name}`)
    if (!res.ok) throw new Error(`No se pudo cargar el Pokémon: ${name}`)
    return res.json()
}


export async function getManyPokemonDetails(urls = []) {
    const results = await Promise.all(
        urls.map(async (u) => {
            const r = await fetch(u)
            if (!r.ok) throw new Error('Error al obtener detalles de un Pokémon')
            return r.json()
        })
    )
    return results
}