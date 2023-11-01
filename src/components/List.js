import { useState, useEffect } from "react";
function List() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(['Fazer a tarefa 1', 'Fazer a tarefa 2']);

  useEffect(() => {
    const listStorage = localStorage.getItem('@tasks');
    if (listStorage) {
      setTasks(JSON.parse(listStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tasks', JSON.stringify(tasks));
  }, [tasks]);


  function handleListAdd(e) {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput('');
  }
  return (
    <div>
      <h2>Adicionando Tarefas</h2>
      <form onSubmit={handleListAdd}>
        <input
          placeholder="Digite uma tarefa"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <h3>Lista de Tarefas</h3>
      <ul>
        {tasks.map((item, index) => <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}
export default List;