import db from '../context/agendaContext';
import AgendaRepository from '../repository/AgendaRepository';
import { Contatos } from './../models/entities/Contatos';
import { Repository } from "typeorm";

class AgendaService {
    agenda: Repository<Contatos>;
    agendaRepository: AgendaRepository;

    constructor(){
        this.agenda = db.getRepository(Contatos);
        this.agendaRepository = new AgendaRepository();
    }

    public async ListarContatos(): Promise<Array<Contatos>> {
        const contatos = await this.agendaRepository.ListarContatos();

        return contatos;
    }

    public async DeletarContato(Id: number): Promise<boolean> {
        const retorno = await this.agendaRepository.DeletarContato(Id);

        return retorno;
    }

    public async InserirContato(registro: Contatos): Promise<Contatos> {
        const contato = await this.agendaRepository.InserirContato(registro);
        await this.agenda.save(contato);

        return contato;
    }

    public async EditarContato(registro: Contatos): Promise<Contatos> {
        const contato = await this.agendaRepository.EditarContato(registro);

        return contato;
    }


};

export default AgendaService;