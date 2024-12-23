import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

// Definindo o tipo de Task com base no seu JSON
type Task = {
  _id: string;
  id_user: string;
  title: string;
  description: string;
  created_At: string;
  status: "Concluída" | "Pendente";
  uuid: string; // Ajustei para string, pois UUIDs são geralmente tratados como strings
  __v: number;
};

const ListTask = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[] | null>(null); // Inicializado como null
  const [statusFilter, setStatusFilter] = useState<"Todos" | "Pendente" | "Concluída">("Todos"); // Filtro de status
  const [editTaskId, setEditTaskId] = useState<string | null>(null); // Controla qual tarefa está em edição
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDescription, setEditedDescription] = useState<string>("");

  useEffect(() => {
    getTasks(); // Chama a função de obter as tarefas
    setRefresh(false); // Reseta o estado de refresh
  }, [refresh, statusFilter]); // Adiciona statusFilter ao array de dependências

  const getTasks = async () => {
    try {
      // Se statusFilter for "Todos", não passa o status no endpoint
      const url = statusFilter === "Todos" 
        ? "http://localhost:5002/listar" 
        : `http://localhost:5002/listar/${statusFilter}`;
      const response = await axios.get(url);
      if (response && response.data) {
        const tasks_res: Task[] = response.data;
        setTasks(tasks_res);
      } else {
        toast.error("Erro ao encontrar as tarefas");
      }
    } catch (error) {
      toast.error("Erro: " + error);
    }
  };

  const markAsCompleted = async (uuid: string) => {
    try {
      const response = await axios.post(`http://localhost:5002/fechar/${uuid}`);
      
      if (response.status === 200) {
        toast.success("Tarefa marcada como concluída!");
        // Atualiza o estado das tarefas para refletir a mudança
        setRefresh(true);
      } else {
        toast.error("Erro ao fechar a tarefa.");
      }
    } catch (error) {
      toast.error("Erro ao tentar marcar como concluída.");
    }
  };

  const removeTask = async (uuid: string) => {
    try {
      const response = await axios.delete(`http://localhost:5002/remove/${uuid}`);

      if (response.status === 200) {
        toast.success("Tarefa removida com sucesso!");
        // Atualiza a lista de tarefas
        setRefresh(true);
      } else {
        toast.error("Erro ao remover a tarefa.");
      }
    } catch (error) {
      toast.error("Erro ao tentar remover a tarefa.");
    }
  };

  const handleEditClick = (task: Task) => {
    setEditTaskId(task.uuid); // Inicia a edição dessa tarefa
    setEditedTitle(task.title); // Preenche o título no campo de edição
    setEditedDescription(task.description); // Preenche a descrição no campo de edição
  };

  const handleSaveEdit = async (uuid: string) => {
    if (!editedTitle || !editedDescription) {
      toast.error("Título e descrição são obrigatórios.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5002/atualizar`, {
        uuid: uuid,
        title: editedTitle,
        description: editedDescription,
      });

      if (response.status === 200) {
        toast.success("Tarefa atualizada com sucesso!");
        setEditTaskId(null); // Finaliza a edição
        setRefresh(true); // Atualiza a lista de tarefas
      } else {
        toast.error("Erro ao atualizar a tarefa.");
      }
    } catch (error) {
      toast.error("Erro: " + error);
    }
  };

  const handleCancelEdit = () => {
    setEditTaskId(null); // Cancela a edição
  };

  return (
    <Container>
      <h2 className="subtitle">Lista de Tarefas</h2>

      {/* Seletor de Filtro de Status */}
      <div>
        <label>Filtrar por Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as "Todos" | "Pendente" | "Concluída")}
        >
          <option value="Todos">Todos</option>
          <option value="Pendente">Pendente</option>
          <option value="Concluída">Concluída</option>
        </select>
      </div>

      <button onClick={() => { setRefresh(true); toast.success('Tarefas atualizadas'); }} className="btn-atualizar">
        Atualizar
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criada em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia as tarefas e exibe uma linha para cada tarefa */}
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task._id}</td>
                {/* Campos editáveis */}
                <td>
                  {editTaskId === task.uuid ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td>
                  {editTaskId === task.uuid ? (
                    <input
                      type="text"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>{task.status}</td>
                <td>{new Date(task.created_At).toLocaleString()}</td>
                <td>
                  {task.status === "Pendente" && (
                    <button
                      onClick={() => markAsCompleted(task.uuid)} 
                      className="btn-concluir"
                    >
                      Concluir
                    </button>
                  )}
                  {editTaskId === task.uuid ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(task.uuid)} // Salva a tarefa
                        className="btn-concluir"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={handleCancelEdit} // Cancela a edição
                        className="btn-remover"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(task)} // Abre a edição da tarefa
                        className="btn-concluir"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => removeTask(task.uuid)}
                        className="btn-remover"
                      >
                        Remover
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>Nenhuma tarefa encontrada</td>
            </tr>
          )}
        </tbody>
      </table>
      <a href="/">Voltar</a>
      <ToastContainer />
    </Container>
  );
};

export default ListTask;
