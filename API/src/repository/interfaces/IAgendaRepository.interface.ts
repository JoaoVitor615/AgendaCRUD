import { Contatos } from "../../models/entities/Contatos"

interface IAgendaRepository {
    ListarContatos(): Promise<Array<Contatos>>;

    InserirContato(registro: Contatos): Promise<Contatos>;

    DeletarContato(Id: number): Promise<boolean>;

    EditarContato(registro: Contatos): Promise<Contatos>;

    CarregarContato(Id: number): Promise<Contatos>;

}

export default IAgendaRepository;