import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [module, setModule] = useState("");

  return (
    <form>
      <legend>Dados pessoais</legend>
      <label>
        <input
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>

      <label>
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={({ target }) => setAge(target.value)}
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
      </label>

        <legend>Módulo</legend>

      <div>
        <label htmlFor="fundamentals">
          <input
            type="radio"
            value="Fundamentos"
            id="fundamentals"
            name="module"
            checked={module === "Fundamentos"}
            onChange={({ target }) => setModule(target.value)}
          />
          Fundamentos
        </label>
        <label htmlFor="frontend">
          <input
            type="radio"
            value="Front-end"
            id="frontend"
            name="module"
            checked={module === "Front-end"}
            onChange={({ target }) => setModule(target.value)}
          />
          Front-end
        </label>
        <label htmlFor="backend">
          <input
            type="radio"
            value="Back-end"
            id="backend"
            name="module"
            checked={module === "Back-end"}
            onChange={({ target }) => setModule(target.value)}
          />
          Back-end
        </label>
        <label htmlFor="ciencia">
          <input
            type="radio"
            value="Ciência da Computação"
            id="ciencia"
            name="module"
            checked={module === "Ciência da Computação"}
            onChange={({ target }) => setModule(target.value)}
          />
          Ciência da Computação
        </label>
      </div>
      <button type="button">Enviar</button>
    </form>
  );
}
