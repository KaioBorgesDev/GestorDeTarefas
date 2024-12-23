import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importando o ToastContainer e toast
import 'react-toastify/dist/ReactToastify.css'; // Importando o estilo do Toastify
import Container from '../components/Container';

const CreateTask = () => {
    // definindo estados para armazenar os valores dos inputs
    const [titleValue, setTitleValue] = useState<string>('');
    const [descriptionValue, setDescriptionValue] = useState<string>('');

    // Função para lidar com as mudanças nos inputs
    const handleValueInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Atualizando o estado com base no input que foi alterado
        if (name === 'titulo') {
            setTitleValue(value);
        } else if (name === 'descricao') {
            setDescriptionValue(value);
        }
    };

    // Função para criar a tarefa, que será chamada no submit
    const createTask = async (event: React.FormEvent) => {
        event.preventDefault();

        // Verificando se os campos estão vazios
        if (isEmpty(titleValue) || isEmpty(descriptionValue)) {
            toast.error("Os campos estão vazios!"); // Exibe um toast de erro
            return;
        }

        const body = {
            id_user: "0622a129-f622-4244-abd4-7b650419a842",
            title: titleValue,
            description: descriptionValue
        };

        try {
            const response = await axios.post('http://localhost:5002/', body);

            if (response.data.Mensagem) {
                toast.success(response.data.Mensagem);
            }

            if (response.data.Error) {
                toast.error("Não foi possível enviar a tarefa.");
            }

        } catch (error) {
            console.error(error);
            toast.error("Ocorreu um erro ao criar a tarefa.");
        }
    };

    return (
        <Container>
            <form className="form" onSubmit={createTask}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Levar o cachorro para passear"
                        value={titleValue}
                        onChange={handleValueInputs} // Atualiza o estado ao digitar
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        id="descricao"
                        name="descricao"
                        placeholder="Descrição da tarefa"
                        value={descriptionValue}
                        onChange={handleValueInputs}
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Enviar
                </button>
            </form>

            {/* ToastContainer para exibir os toasts */}
            <ToastContainer />
            <h3><a href="/listar">Listar Tarefas</a></h3>
        </Container>
    );
};

export default CreateTask;
