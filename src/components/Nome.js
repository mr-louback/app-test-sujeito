import { useState } from "react";

function Nome({ idade }) {
    let [count, setCount] = useState(idade);
    let [name, setName] = useState('Ednei');
    function handleCount() {
        setCount(count + 1);
    }
    function handleInsertText(texto) {
            setName(texto);
        
    }
    return (<div>
        <h2>Nome: {name} Idade: {count} anos</h2>
        <button onClick={handleCount}>Clique e aumente a idade</button>
        <br />
        <br />
        <button onClick={() => handleInsertText('Ednei Louback')}>Muda Texto</button>
    </div>)
}

export default Nome;