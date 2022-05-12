import React, { useState, useEffect } from 'react'
import './Pokemon.css'
import Modal from 'react-modal'
import Card from './Color'
import ModalColor from './ModalColor'

function Pokemon({ name, id }) {

    const [pokemon, setPokemon] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {

        async function getPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json()
            console.log(data)
            const api = {
                data: data,
                name: data.name,
                type: data.types[0].type.name,
                experience: data.stats[0].base_stat,
                peso: data.weight,
                altura: data.height
            }
            setPokemon(api)

            return api
        }

        getPokemon()
    }, [])


    const colorsObject = {
        grass: '#5AA350',
        water: '#27A4F2',
        fire: '#F27405',
        bug: '#92BF30',
        normal: '#D9A796',
        poison: '#A65398',
        electric: '#F2B705',
        ground: '#BF6F41',
        fairy: '#f599e9',
        fighting: '#734E40',
        psychic: '#77828C',
        rock: '#F27405',
        ghost: '#b36fe0',
        dragon: '#cadetblue',
        ice: '#84B8D9',
    }

    return (
        <>
            <Card background={colorsObject[pokemon.type]} onClick={() => setShow(true)} className="card" >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <h3>{pokemon.name}</h3>
            </Card>
            <Modal background={colorsObject[pokemon.type]} className="Modal" overlayClassName="Overlay" isOpen={show} onRequestClose={() => setShow(false)} >
                <ModalColor background={colorsObject[pokemon.type]} >
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                </ModalColor>
                <div className="content">
                    <h1 className="modal-name">{pokemon.name}</h1>
                    <div className="texto-modal">
                        <div className="texto1">
                            <span>Type: {pokemon.type}</span>
                        </div>
                        <div className="texto2">
                            <span>Experience: {pokemon.experience}</span>
                        </div>
                        <div className="texto3">
                            <span>Weight: {pokemon.peso}</span>
                        </div>
                        <div className="texto4">
                            <span>Weight: {pokemon.altura}</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}


export default Pokemon