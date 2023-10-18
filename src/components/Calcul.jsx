import React from 'react'

export default function Calcul() {
  return (
    <div className='calcul'>
        <div className='form'>
            <div className='group'>
                <label htmlFor="capital">Capital :</label>
                <input type="number" name='capital' id='capital'/>
            </div>
            <div className='group'>
                <label htmlFor="taux">Taux d'interet :</label>
                <input type="number" name='taux' id='taux'/>
            </div>
            <div className='group'>
                <label htmlFor="duree">Durée de rembourssement :</label>
                <input type="number" name='duree' id='duree'/>
            </div>
            <div className='btn'>
                <button>Calculer</button>
                <button>Initailiser</button>
            </div>
            <div className='group'>
                <label htmlFor="mens">Mensualité :</label>
                <input type="number" name='mens' id='mens'/>
            </div>
        </div>
    </div>
  )
}
