import { Router } from "express";
import { Request, Response } from 'express';
import AgendaService from "../services/AgendaService";

const router = Router();
const service = new AgendaService();

//Rota para listar tarefas
router.get('/listar-contatos', async(req: Request, res: Response) => {
    const result = await service.ListarContatos();
    
    return res.json(result);
});

//Rota Para deletar tarefas
router.delete('/deletar-contato/:Id', async(req: Request, res: Response) => {
    const { Id } = req.params;
    const idRes = Number(Id)
    const result = await service.DeletarContato(idRes);

    return res.json(result);
});

//Rota para inserir contatos
router.post('/inserir-contato', async(req: Request, res: Response) => {
    const registro = req.body;
    const contato = await service.InserirContato(registro);

    return res.json(contato);
});

//Rota para editar contatos
router.put('/editar-contato', async(req: Request, res: Response) => {
    const registro = req.body;
    const contato = await service.EditarContato(registro);

    return res.json(contato);
});

//Rota para carregar um contato específico
router.get('/carregar-contato/:Id', async(req: Request, res: Response) => {
    const { Id } = req.params;
    const idRes = Number(Id)
    const contato = await service.CarregarContato(idRes)

    return res.json(contato)
})

export default router;