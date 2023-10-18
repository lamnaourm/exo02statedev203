import React, { useState } from 'react'

export default function Calcul() {

    const [capital, setCapital] = useState(0)
    const [taux, setTaux] = useState(0)
    const [duree, setDuree] = useState(0)
    const [mensualite, setMensulaite] = useState(0)


    const calculer = () => {
        let mens = (capital * taux/1200) / (1 - Math.pow((1+taux/1200), -duree))
        setMensulaite(mens)
    }
    const initialiser = () => {
        setCapital(0)
        setTaux(0)
        setDuree(0)
        setMensulaite(0)
    }
    return (
        <div className='calcul'>
            <div className='form'>
                <div className='group'>
                    <label htmlFor="capital">Capital :</label>
                    <input type="number" name='capital' id='capital' value={capital} onChange={(e) => setCapital(e.target.value)} />
                </div>
                <div className='group'>
                    <label htmlFor="taux">Taux d'interet :</label>
                    <input type="number" name='taux' id='taux' value={taux} onChange={(e) => setTaux(e.target.value)}/>
                </div>
                <div className='group'>
                    <label htmlFor="duree">Durée de rembourssement :</label>
                    <input type="number" name='duree' id='duree' value={duree} onChange={(e) => setDuree(e.target.value)}/>
                </div>
                <div className='btns'>
                    <button onClick={calculer}>Calculer</button>
                    <button onClick={initialiser}>Initailiser</button>
                </div>
                <div className='group'>
                    <label htmlFor="mens">Mensualité :</label>
                    <input type="number" name='mens' id='mens' value={mensualite} onChange={(e) => setMensulaite(e.target.value)} disabled/>
                </div>
            </div>
        </div>
    )
}
