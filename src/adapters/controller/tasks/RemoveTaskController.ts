
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import RemoveTask from "src/usecases/RemoveTask"

const RemoveTaskController = async (req, res) =>{
    const removeTask = new RemoveTask(new TaskRepositoryImp);
    const uuid = req.params.uuid;
    try{
        await removeTask.execute(uuid);
        res.status(200).json({Mensagem: "Excluído com sucesso"})
    }catch(error){
        res.status(401).json({Mensagem: error});
    }
}

module.exports = RemoveTaskController;