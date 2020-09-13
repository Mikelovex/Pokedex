import React from 'react'
import Pokemon from './Pokemon'
import './Pokedex.css'




let pokemons = []

for(let i = 1; i < 152; i++) {
    pokemons.push(i)
}


function Pokedex() {

    return (

        <div  className="container">
            {pokemons.map(p => (
                <Pokemon name={p} id={p}/>
            ))}
        </div>

    )
}


export default Pokedex