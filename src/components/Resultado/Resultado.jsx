import React from 'react';
import './Resultado.css';

function Resultado({ imc, classificacao }) {
    return (
        <div className="resultado">
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
        </div>
    );
}

export default Resultado;