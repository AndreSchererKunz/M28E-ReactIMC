import React from 'react';
import './Form.css';

function Form({ altura, setAltura, peso, setPeso, calcularIMC }) {
    return (
        <div className="form-container">
            <label>
                Altura (cm):
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex: 180"
            />
            </label>
            <br />
            <label>
                Peso (kg):
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex: 80"
            />
            </label>
            <br />
            <button onClick={calcularIMC}>Calcular IMC</button>
        </div>
    );
}

export default Form;