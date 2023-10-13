import React, { Component } from 'react'

export default class Calcul extends Component {
    state = {
        
    }
  render() {
    return (
      <div className='calcul'>
        <div className='form'>
            <div className='group'>
                <label htmlFor="capital">Capital : </label>
                <input type="number" name="capital" id="capital" />
            </div>
            <div className='group'>
                <label htmlFor="taux">Taux d'interet : </label>
                <input type="number" name="taux" id="taux" />
            </div>
            <div className='group'>
                <label htmlFor="duree">Durée : </label>
                <input type="number" name="duree" id="duree" />
            </div>
            <div className='btns'>
                <button>Calculer</button>
                <button>Initialiser</button>
            </div>
            <hr />
            <div className='group'>
                <label htmlFor="mensualite">Mensualité : </label>
                <input type="number" name="mensualite" id="mensualite" />
            </div>
        </div>
      </div>
    )
  }
}
