import { useState } from "react";
function List() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(['Fazer a tarefa 1', 'Fazer a tarefa 2']);
  function handleListAdd(e) {
    e.preventDefault();
    setList([...list, task]);
    setTask('');
  }
  return (
    <div>
      <h2>Adicionando Tarefas</h2>
      <form onSubmit={handleListAdd}>
        <input
          placeholder="Digite uma tarefa"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <h3>Lista de Tarefas</h3>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}
export default List;