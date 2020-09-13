import React, { useState, useEffect } from 'react'
import './Pokemon.css'
import Modal from 'react-modal'
import Card from './Color'
import ModalColor  from './ModalColor'

function Pokemon({name, id}) {

    const [pokemon, setPokemon] = useState('')
    const [show , setShow] = useState(false)

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

    function color(){
        if(pokemon.type === 'grass') {
            return '#5AA350'
        }
        if(pokemon.type === 'water') {
            return '#27A4F2'
        }
        if(pokemon.type === 'fire') {
            return '#F27405'
        }
        if(pokemon.type === 'bug') {
            return '#92BF30'
        }
        if(pokemon.type === 'normal') {
            return '#D9A796'
        }
        if(pokemon.type === 'poison') {
            return '#A65398'
        }
        if(pokemon.type === 'electric') {
            return '#F2B705'
        }
        if(pokemon.type === 'ground') {
            return '#BF6F41'
        }
        if(pokemon.type === 'fairy') {
            return '#f599e9'
        }
        if(pokemon.type === 'fighting') {
            return '#734E40'
        }
        if(pokemon.type === 'psychic') {
            return '#FF69B4'
        }
        if(pokemon.type === 'rock') {
            return '#77828C'
        }
        if(pokemon.type === 'ghost') {
            return '#b36fe0'
        } 
        if(pokemon.type === 'dragon') {
            return 'cadetblue'
        } 
        if(pokemon.type === 'ice') {
            return '#84B8D9'
        } 
    }

    return(
        <>
        <Card background={color()} onClick={() => setShow(true)} className="card" >
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            <h3>{pokemon.name}</h3>
        </Card>
        <Modal  background={color()} className="Modal" overlayClassName="Overlay" isOpen={show} onRequestClose={() => setShow(false)} >
            <ModalColor background={color()} >
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
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