import React, { useState } from 'react';

interface PokedexProps {
    
}

const PokemonsArray: string[] = ['Pikachu', 'Ditto', 'Metapod', 'Magikarp']

const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setpokemons] = useState<string[]>(PokemonsArray);

    const [SelectedPokemon, setSelectedPokemon] = useState<string | undefined>('');

    return (
        <div>
            <h1>Pokedex</h1>

            <h4>Pokemons: {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button>)}
            </h4> 
            <h2>Pokemon Selecionado: {SelectedPokemon}</h2>
        </div>
    );
};

export default Pokedex;