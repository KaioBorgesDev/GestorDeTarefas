import CloseTask from "src/usecases/CloseTask";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";

const closeTaskController = async (req,res) =>{
    const closeTask = new CloseTask(new TaskRepositoryImp);
    const uuid_task = req.params.uuid;
    console.log(req.params.uuid)
    try {
        await closeTask.execute(uuid_task);
        res.status(200).json({mensagem: "Excluido com sucesso"})
    } catch (error) {
        res.status(401).json({mensagem: "Erro ao excluir " + error});
    }
}

module.exports = closeTaskController;