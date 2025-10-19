export default function PokemonCard({ pokemon, showProps = ['id', 'height', 'weight'] }) {
    const { id, name, sprites } = pokemon
    return (
        <div className="card card-pokemon shadow-sm">
            <div className="card-body text-center">
                <img
                    src={sprites?.other?.['official-artwork']?.front_default || sprites?.front_default}
                    alt={name}
                    width={120}
                    height={120}
                />
                <h5 className="mt-2 text-capitalize">{name}</h5>
                <p className="text-muted mb-2">#{id?.toString().padStart(4, '0')}</p>
                <ul className="list-unstyled small mb-0">
                    {showProps.includes('id') && <li><strong>ID:</strong> {id}</li>}
                    {showProps.includes('height') && <li><strong>Altura:</strong> {pokemon.height}</li>}
                    {showProps.includes('weight') && <li><strong>Peso:</strong> {pokemon.weight}</li>}
                    {showProps.includes('base_experience') && <li><strong>Exp. base:</strong> {pokemon.base_experience}</li>}
                </ul>
            </div>
        </div>
    )
}