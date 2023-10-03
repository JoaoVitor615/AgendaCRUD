import { Repository, Timestamp } from "typeorm";
import IAgendaRepository from "./interfaces/IAgendaRepository.interface";
import { Contatos } from "../models/entities/Contatos";
import db from "../context/agendaContext";

class AgendaRepository implements IAgendaRepository {
    agenda: Repository<Contatos>

    constructor() {
        this.agenda = db.getRepository(Contatos);
    }

    //Listar todos os contatos
    public async ListarContatos(): Promise<Array<Contatos>> {
        return await this.agenda.find();
    }

    //Deletar contato
    public async DeletarContato(Id: number): Promise<boolean> {
        try{
            await this.agenda.delete(Id);
            return true
        } catch(err) {
            return false
        }
    }

    //Inserir novo contato
    public async InserirContato(registro: Contatos): Promise<Contatos> {
        return this.agenda.create(registro);
    }

    //Editar contato
    public async EditarContato(registro: Contatos): Promise<Contatos> {
        await this.agenda.update({ Id: registro.Id }, registro);

        const contato = await this.agenda.findOne({ where: { Id: registro.Id }});
        return contato;
    }

    //Carregar um contato específico
    public async CarregarContato(Id: number): Promise<Contatos> {
        return await this.agenda.findOne({ where: {Id: Id}});
    }
}

export default AgendaRepository;