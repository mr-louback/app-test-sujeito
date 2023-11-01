import { useState } from "react";
function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [user, setUser] = useState({});
    function handleRegister(e) {
        e.preventDefault();
        alert('Usuario Cadastrado com Sucesso!')
        const user = {
            name: name,
            email: email,
            age: age
        }
        setUser(user);
    }
    return (
        <div>
            <h2>CadastroForms</h2>
            <form onSubmit={handleRegister}>
                <label>Nome: </label><br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Idade: </label><br />
                <input
                    type="number"
                    name="idade"
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <label>Email: </label><br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                <h2>Lista de Cadastros</h2>
                <div>Bem vindo: {user.name}</div>
                <div>Idade:{user.age}</div>
                <div>Email: {user.email}</div>
            </div>
        </div>
    )
}
export default Forms;