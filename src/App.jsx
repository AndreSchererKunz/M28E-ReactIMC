import React, { useState } from "react";
import "./global.css";
import Form from "./components/Form/Form";
import Resultado from "./components/Resultado/Resultado";
import Contato from "./components/Contato/Contato";

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState(''); 
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const imcCalculado = parseFloat(peso) / (alturaEmMetros ** 2);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.99) {
        setClassificacao('Peso normal');
      } else if (imcCalculado >= 25 && imcCalculado < 29.99) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado >= 30 && imcCalculado < 34.99) {
        setClassificacao('Obesidade grau 1');
      } else if (imcCalculado >= 35 && imcCalculado < 39.99) {
        setClassificacao('Obesidade grau 2');
      } else {
        setClassificacao('Obesidade grau 3');
      }
    } else {
      alert('Por favor, insira altura e peso!');
    }
  };

  return (
    <div className="App">
      <h1><b>Calculadora de IMC</b></h1>
      <Form
        altura={altura}
        setAltura={setAltura}
        peso={peso}
        setPeso={setPeso}
        calcularIMC={calcularIMC}
      />

      {imc && <Resultado imc={imc} classificacao={classificacao} />}

      <Contato />
    </div>
  );
}

export default App;