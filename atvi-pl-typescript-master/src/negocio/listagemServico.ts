import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class listagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços:`)
        this.servicos.forEach(Servico => {
            console.log(`Nome:` + Servico.nome)
            console.log(`------------------------------------------------------`)
        })
        console.log(`\n`)
    }

}
