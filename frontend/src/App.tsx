import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Gestor de Tarefas</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" name="titulo" placeholder="Levar o cachorro para passear" />
        </div>
        
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" placeholder="Descrição da tarefa" />
        </div>
        
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  )
}

export default App